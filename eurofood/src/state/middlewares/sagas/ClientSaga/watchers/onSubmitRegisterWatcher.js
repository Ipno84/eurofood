import { SUBMIT_REGISTER } from './../../../../../constants/ClientConstants';
import onSubmitRegisterSaga from './../actions/onSubmitRegisterSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* onSubmitRegisterWatcher() {
    yield takeLatest(SUBMIT_REGISTER, onSubmitRegisterSaga);
}
