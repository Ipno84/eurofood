import { all, call, put, select } from 'redux-saga/effects';

import { CommonActions } from '@react-navigation/native';
import NavigatorRef from './../../../../../helpers/NavigatorRef';
import { ROUTE_NAME_HOME } from '../../../../../constants/RouteConstants';
import getLoginEmailSelector from './../../../../selectors/ClientSelectors/getLoginEmailSelector';
import getLoginPasswordSelector from './../../../../selectors/ClientSelectors/getLoginPasswordSelector';
import isPasswordValid from './../../../../../helpers/isPasswordValid';
import isValidEmail from './../../../../../helpers/isValidEmail';
import loginCall from './../../../../../api/calls/CustomersCalls/loginCall';
import submitLoginAction from './../../../../actions/ClientActions/submitLoginAction';

export default function* onSubmitLoginSaga() {
    try {
        const email = yield select(getLoginEmailSelector);
        const password = yield select(getLoginPasswordSelector);
        const isEmailValid = isValidEmail(email);
        // const isPasswordValid = isPasswordValid(password);
        if (!isEmailValid) throw new Error('Indirizzo email non valido');
        // if (!isPasswordValid) throw new Error('Password non valida');
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
        yield put(submitLoginAction({ error: true }));
    }
}
