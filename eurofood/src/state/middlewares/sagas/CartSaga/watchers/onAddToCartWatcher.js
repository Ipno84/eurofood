import { ADD_TO_CART } from './../../../../../constants/CartConstants';
import onAddToCartSaga from './../actions/onAddToCartSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* onAddToCartWatcher() {
    yield takeLatest(ADD_TO_CART, onAddToCartSaga);
}
