import { EMPTY_CART } from './../../../../../constants/CartConstants';
import onEmptyCartSaga from './../actions/onEmptyCartSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* onEmptyCartWatcher() {
    yield takeLatest(EMPTY_CART, onEmptyCartSaga);
}
