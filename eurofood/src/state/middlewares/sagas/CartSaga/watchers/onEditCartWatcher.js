import { SET_PRODUCT_CART_ITEM_QUANTITY } from './../../../../../constants/CartConstants';
import onEditCartSaga from './../actions/onEditCartSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* onEditCartWatcher() {
    yield takeLatest(SET_PRODUCT_CART_ITEM_QUANTITY, onEditCartSaga);
}
