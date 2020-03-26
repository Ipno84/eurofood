import { SUBMIT_LOGIN } from './../../../../../constants/ClientConstants';
import onSubmitLoginSaga from './../actions/onSubmitLoginSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* onSubmitLoginWatcher() {
    yield takeLatest(SUBMIT_LOGIN, onSubmitLoginSaga);
}
