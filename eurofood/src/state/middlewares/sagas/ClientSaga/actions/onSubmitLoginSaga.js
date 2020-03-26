import { all, call, put, select } from 'redux-saga/effects';

import getLoginEmailSelector from './../../../../selectors/ClientSelectors/getLoginEmailSelector';
import getLoginPasswordSelector from './../../../../selectors/ClientSelectors/getLoginPasswordSelector';
import isPasswordValid from './../../../../../helpers/isPasswordValid';
import isValidEmail from './../../../../../helpers/isValidEmail';
// import getServerSettingsAction from './../../../../actions/SettingsActions/getServerSettingsAction';
// import getServerSettingsCall from './../../../../../api/calls/SettingsCalls/getServerSettingsCall';
import submitLoginAction from './../../../../actions/ClientActions/submitLoginAction';

export default function* onSubmitLoginSaga() {
    try {
        const email = yield select(getLoginEmailSelector);
        const password = yield select(getLoginPasswordSelector);
        const isEmailValid = isValidEmail(email);
        const isPasswordValid = isPasswordValid(password);
        console.log(email, password, isEmailValid, isPasswordValid);
        if (!isEmailValid) throw new Error('Indirizzo email non valido');
        if (!isPasswordValid) throw new Error('Password non valida');
        // const { server, home } = yield call(getServerSettingsCall);
        // yield all([
        //     put(getServerSettingsAction({ server })),
        //     put(setHomeTemplateAction({ home }))
        // ]);
    } catch (error) {
        yield put(submitLoginAction({ error: true }));
    }
}
