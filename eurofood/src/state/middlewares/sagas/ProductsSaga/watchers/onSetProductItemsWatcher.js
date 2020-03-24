import { SET_PRODUCTS_ITEMS } from './../../../../../constants/ProductsConstants';
import onSetProductItemsSaga from './../actions/onSetProductItemsSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* onSetProductItemsWatcher() {
    yield takeLatest(SET_PRODUCTS_ITEMS, onSetProductItemsSaga);
}
