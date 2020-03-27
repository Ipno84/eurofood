import { LOGOUT } from './../../../../../constants/ClientConstants';
import onLogoutSaga from './../actions/onLogoutSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* onLogoutWatcher() {
    yield takeLatest(LOGOUT, onLogoutSaga);
}
