import {
    SET_LOGIN_EMAIL,
    SET_LOGIN_PASSWORD,
    SET_REGISTER_EMAIL,
    SET_REGISTER_FIRSTNAME,
    SET_REGISTER_LASTNAME,
    SET_REGISTER_NEWSLETTER,
    SET_REGISTER_PASSWORD,
    SET_REGISTER_PSGDPR
} from './../../../../../constants/ClientConstants';

import resetErrorHookSaga from './../actions/resetErrorHookSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* resetErrorHookWatcher() {
    yield takeLatest(SET_LOGIN_EMAIL, resetErrorHookSaga);
    yield takeLatest(SET_LOGIN_PASSWORD, resetErrorHookSaga);
    yield takeLatest(SET_REGISTER_EMAIL, resetErrorHookSaga);
    yield takeLatest(SET_REGISTER_FIRSTNAME, resetErrorHookSaga);
    yield takeLatest(SET_REGISTER_LASTNAME, resetErrorHookSaga);
    yield takeLatest(SET_REGISTER_NEWSLETTER, resetErrorHookSaga);
    yield takeLatest(SET_REGISTER_PASSWORD, resetErrorHookSaga);
    yield takeLatest(SET_REGISTER_PSGDPR, resetErrorHookSaga);
}
