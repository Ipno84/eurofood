import {
    ENDPOINT_LOGIN,
    HOST,
    PRIVATE_TOKEN,
    SUFFIX,
    BASIC_TOKEN
} from './../constants/ApiConstants';

import AxiosError from './../helpers/AxiosError';
import Snackbar from 'react-native-snackbar';
import axios from 'axios';
import getJwtTokenSelector from '../state/selectors/ClientSelectors/getJwtTokenSelector';
import getValidDataFromCacheSelector from './../state/selectors/CacheSelectors/getValidDataFromCacheSelector';
import isUserLoggedInSelector from '../state/selectors/ClientSelectors/isUserLoggedInSelector';
import logoutAction from '../state/actions/ClientActions/logoutAction';
import { orange } from './../constants/ThemeConstants';
import queryString from 'query-string';
import setCacheKeyAction from './../state/actions/CacheActions/setCacheKeyAction';
import { store } from './../state/store';

export default function setupAxios() {
    axios.defaults.withCredentials = true;

    axios.defaults.auth = {
        username: PRIVATE_TOKEN,
        password: ''
    };

    axios.interceptors.request.use(
        request => {
            request.headers['Output-Format'] = 'JSON';
            const state = store.getState();

            if (request.params && request.params.canSetClientCache) {
                request.__canSetClientCache = true;
                delete request.params.canSetClientCache;
            }
            if (request.params && request.params.useBasicToken) {
                delete request.auth;
                request.headers['Authorization'] = 'Basic ' + BASIC_TOKEN;

                delete request.params.useBasicToken;
            } else {
                const jwt = getJwtTokenSelector(state);
                if (jwt) request.headers['X-Eurofood-Auth'] = jwt;
            }
            if (request.method === 'get') {
                const params = queryString.stringify(request.params);
                const cached = getValidDataFromCacheSelector(state, params);
                if (cached) {
                    request.data = cached;
                    request.__fromCache = true;
                    request.adapter = () => {
                        return Promise.resolve({
                            data: cached,
                            status: request.status,
                            statusText: request.statusText,
                            headers: request.headers,
                            config: request,
                            request: request
                        });
                    };
                }
            }
            return request;
        },
        error => Promise.reject(error)
    );

    axios.interceptors.response.use(
        response => {
            const isServerError = Boolean(
                response.status &&
                    !isNaN(response.status) &&
                    response.status >= 400
            );
            const isError = Boolean(
                response.data &&
                    response.data.errors &&
                    response.data.errors.length
            );
            const isForbidden = Boolean(
                isError &&
                    response.data &&
                    response.data.errors.find(e => e.code === 403) &&
                    response.data.errors.find(e => e.message === 'Forbidden')
            );
            if (
                isForbidden &&
                response.config.url !== `${HOST}/${SUFFIX}/${ENDPOINT_LOGIN}`
            ) {
                Snackbar.show({
                    text: `Non sei autorizzato ad effettuare quest'operazione`,
                    duration: Snackbar.LENGTH_LONG,
                    action: {
                        text: 'OK',
                        textColor: orange.toString(),
                        onPress: () => Snackbar.dismiss()
                    }
                });
                const state = store.getState();
                const isUserLoggedIn = isUserLoggedInSelector(state);
                if (isUserLoggedIn) store.dispatch(logoutAction());
            }
            if (isError) {
                throw new AxiosError(
                    'Axios call cancelled',
                    response.data.errors
                );
            }
            if (
                response.config.method === 'get' &&
                !response.config.__fromCache &&
                response.config.__canSetClientCache &&
                !isServerError &&
                !isError
            ) {
                const params = queryString.stringify(response.config.params);
                const value = {
                    date: Math.floor(Date.now() / 1000),
                    data: JSON.stringify(response.data)
                };
                store.dispatch(setCacheKeyAction(params, value));
            }
            return response;
        },
        error => {
            const isServerGenericError = Boolean(
                error &&
                    error.response &&
                    error.response.status &&
                    !isNaN(error.response.status) &&
                    error.response.status == 500
            );

            if (isServerGenericError) {
                Snackbar.show({
                    text: `Qualcosa è andato storto, ritenta quest'operazione più tardi`,
                    duration: Snackbar.LENGTH_LONG,
                    action: {
                        text: 'OK',
                        textColor: orange.toString(),
                        onPress: () => Snackbar.dismiss()
                    }
                });
            }
            return Promise.reject(error);
        }
    );
}
