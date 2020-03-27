import {
    LOGIN_EMAIL_ERROR,
    LOGIN_PASSWORD_ERROR
} from './../../../../../constants/ErrorsConstants';
import ValidationError, {
    VALIDATION_CLASS_NAME
} from './../../../../../helpers/ValidationError';
import { all, call, put, select } from 'redux-saga/effects';

import { CommonActions } from '@react-navigation/native';
import NavigatorRef from './../../../../../helpers/NavigatorRef';
import { ROUTE_NAME_HOME } from '../../../../../constants/RouteConstants';
import getLoginEmailSelector from './../../../../selectors/ClientSelectors/getLoginEmailSelector';
import getLoginPasswordSelector from './../../../../selectors/ClientSelectors/getLoginPasswordSelector';
import isValidEmail from './../../../../../helpers/isValidEmail';
import loginCall from './../../../../../api/calls/CustomersCalls/loginCall';
import setErrorAction from './../../../../actions/ErrorsActions/setErrorAction';
import submitLoginAction from './../../../../actions/ClientActions/submitLoginAction';

export default function* onSubmitLoginSaga() {
    try {
        const email = yield select(getLoginEmailSelector);
        const password = yield select(getLoginPasswordSelector);
        const emailValid = isValidEmail(email);
        const passwordValid = password.length > 0;
        if (!emailValid)
            throw new ValidationError('Indirizzo email non valido', {
                key: LOGIN_EMAIL_ERROR
            });
        if (!passwordValid)
            throw new ValidationError('Password non valida', {
                key: LOGIN_PASSWORD_ERROR
            });
        const results = yield call(loginCall, email, password);
        if (results && results.customers && results.customers.length) {
            const navRef = new NavigatorRef();
            navRef.navigation.dispatch(
                CommonActions.reset({
                    index: 1,
                    routes: [{ name: ROUTE_NAME_HOME }]
                })
            );
            yield put(
                submitLoginAction({ success: true, user: results.customers[0] })
            );
        }
    } catch (error) {
        if (error.name === VALIDATION_CLASS_NAME) {
            yield all([
                put(
                    setErrorAction({
                        key: error.payload.key,
                        message: error.message
                    })
                ),
                put(submitLoginAction({ error: true }))
            ]);
        }
    }
}
