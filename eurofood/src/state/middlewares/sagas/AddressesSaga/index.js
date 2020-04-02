import { fork } from 'redux-saga/effects';
import getCurrentUserAddressesWatcher from './watchers/getCurrentUserAddressesWatcher';
import setAddressFormIdCustomerWatcher from './watchers/setAddressFormIdCustomerWatcher';
import submitAddressWatcher from './watchers/submitAddressWatcher';

export default function* AddressesSaga() {
    yield fork(getCurrentUserAddressesWatcher);
    yield fork(submitAddressWatcher);
    yield fork(setAddressFormIdCustomerWatcher);
}
