import { GET_PRODUCT_IMAGES } from './../../../../../constants/ProductsConstants';
import getProductImagesSaga from './../actions/getProductImagesSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* getProductImagesWatcher() {
    yield takeLatest(GET_PRODUCT_IMAGES, getProductImagesSaga);
}
