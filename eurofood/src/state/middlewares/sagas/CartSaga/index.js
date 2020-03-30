import { fork } from 'redux-saga/effects';
import onAddToCartWatcher from './watchers/onAddToCartWatcher';
import onEditCartWatcher from './watchers/onEditCartWatcher';
import onEmptyCartWatcher from './watchers/onEmptyCartWatcher';
import setCurrentCartIdCustomerWatcher from './watchers/setCurrentCartIdCustomerWatcher';

export default function* CartSaga() {
    yield fork(onAddToCartWatcher);
    yield fork(setCurrentCartIdCustomerWatcher);
    yield fork(onEditCartWatcher);
    yield fork(onEmptyCartWatcher);
}
