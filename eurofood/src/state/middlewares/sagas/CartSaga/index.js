import { fork } from 'redux-saga/effects';
import backorderWatcher from './watchers/backorderWatcher';
import onAddToCartWatcher from './watchers/onAddToCartWatcher';
import onEditCartWatcher from './watchers/onEditCartWatcher';
import onEmptyCartWatcher from './watchers/onEmptyCartWatcher';
import setCurrentCartIdCustomerWatcher from './watchers/setCurrentCartIdCustomerWatcher';
import onSetSelectedShippingAddressIdWatcher from './watchers/onSetSelectedShippingAddressIdWatcher';
import onSetSelectedCarrierMethodWatcher from './watchers/onSetSelectedCarrierMethodWatcher';

export default function* CartSaga() {
    yield fork(onAddToCartWatcher);
    yield fork(setCurrentCartIdCustomerWatcher);
    yield fork(onEditCartWatcher);
    yield fork(onEmptyCartWatcher);
    yield fork(backorderWatcher);
    yield fork(onSetSelectedShippingAddressIdWatcher);
    yield fork(onSetSelectedCarrierMethodWatcher);
}
