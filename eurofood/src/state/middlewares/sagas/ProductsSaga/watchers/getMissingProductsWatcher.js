import { GET_MISSING_PRODUCTS } from './../../../../../constants/ProductsConstants';
import getMissingProductsSaga from './../actions/getMissingProductsSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* getMissingProductsWatcher() {
    yield takeLatest(GET_MISSING_PRODUCTS, getMissingProductsSaga);
}
