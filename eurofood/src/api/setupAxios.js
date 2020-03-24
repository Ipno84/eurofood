import { BASIC_TOKEN } from './../constants/ApiConstants';
import axios from 'axios';
import getValidDataFromCacheSelector from './../state/selectors/CacheSelectors/getValidDataFromCacheSelector';
import queryString from 'query-string';
import setCacheKeyAction from './../state/actions/CacheActions/setCacheKeyAction';
import { store } from './../state/store';

export default function setupAxios() {
    axios.defaults.withCredentials = true;

    axios.interceptors.request.use(
        request => {
            request.headers['Authorization'] = 'Basic ' + BASIC_TOKEN;
            request.headers['Output-Format'] = 'JSON';
            if (request.method === 'get') {
                const state = store.getState();
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
            if (
                response.config.method === 'get' &&
                !response.config.__fromCache
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
        error => Promise.reject(error)
    );
}
