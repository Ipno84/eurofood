import { all, call, put, select } from 'redux-saga/effects';

import getProductImagesCall from './../../../../../api/calls/ProductsCalls/getProductImagesCall';

export default function* getProductImagesSaga({ id }) {
    try {
        const images = yield call(getProductImagesCall, { idProduct: id });
        console.log(images);
    } catch (error) {
        console.log(error);
    }
}
