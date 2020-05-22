import {
    SET_LOGIN_EMAIL,
    SET_LOGIN_PASSWORD,
    SET_REGISTER_ADDRESS,
    SET_REGISTER_CITY,
    SET_REGISTER_COMPANY,
    SET_REGISTER_EMAIL,
    SET_REGISTER_FIRSTNAME,
    SET_REGISTER_ID_COUNTRY,
    SET_REGISTER_LASTNAME,
    SET_REGISTER_NEWSLETTER,
    SET_REGISTER_PASSWORD,
    SET_REGISTER_PEC,
    SET_REGISTER_PHONE,
    SET_REGISTER_POSTCODE,
    SET_REGISTER_PSGDPR,
    SET_REGISTER_SDI,
    SET_REGISTER_VAT_NUMBER
} from './../../../../../constants/ClientConstants';

import { SET_ADDRESS_KEY_VALUE } from './../../../../../constants/AddressConstants';
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
    yield takeLatest(SET_ADDRESS_KEY_VALUE, resetErrorHookSaga);
    yield takeLatest(SET_REGISTER_COMPANY, resetErrorHookSaga);
    yield takeLatest(SET_REGISTER_VAT_NUMBER, resetErrorHookSaga);
    yield takeLatest(SET_REGISTER_SDI, resetErrorHookSaga);
    yield takeLatest(SET_REGISTER_PEC, resetErrorHookSaga);
    yield takeLatest(SET_REGISTER_ADDRESS, resetErrorHookSaga);
    yield takeLatest(SET_REGISTER_POSTCODE, resetErrorHookSaga);
    yield takeLatest(SET_REGISTER_CITY, resetErrorHookSaga);
    yield takeLatest(SET_REGISTER_ID_COUNTRY, resetErrorHookSaga);
    yield takeLatest(SET_REGISTER_PHONE, resetErrorHookSaga);
}
