import { fork } from 'redux-saga/effects';
import onLogoutWatcher from './watchers/onLogoutWatcher';
import onSubmitBillingAddressWatcher from './watchers/onSubmitBillingAddressWatcher';
import onSubmitLoginWatcher from './watchers/onSubmitLoginWatcher';
import onSubmitRegisterWatcher from './watchers/onSubmitRegisterWatcher';

export default function* ClientSaga() {
    yield fork(onSubmitLoginWatcher);
    yield fork(onSubmitRegisterWatcher);
    yield fork(onLogoutWatcher);
    yield fork(onSubmitBillingAddressWatcher);
}
