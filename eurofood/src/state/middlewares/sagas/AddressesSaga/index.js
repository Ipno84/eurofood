import { fork } from 'redux-saga/effects';
import getCurrentUserAddressesWatcher from './watchers/getCurrentUserAddressesWatcher';

export default function* AddressesSaga() {
    yield fork(getCurrentUserAddressesWatcher);
}
