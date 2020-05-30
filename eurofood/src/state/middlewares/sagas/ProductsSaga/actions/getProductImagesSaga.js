import { all, call, put, select } from 'redux-saga/effects';

import { HOST } from '../../../../../constants/ApiConstants';
import getProductImagesAction from './../../../../actions/ProductsActions/getProductImagesAction';
import getProductImagesCall from './../../../../../api/calls/ProductsCalls/getProductImagesCall';

export default function* getProductImagesSaga({ id, defaultImageId }) {
    try {
        //const images = yield call(getProductImagesCall, { idProduct: id });
        const imagesResponse = {
            images: [
                {
                    id: '4063'
                },
                {
                    id: '4233'
                }
            ]
        };
        if (imagesResponse && imagesResponse.images) {
            const urls = imagesResponse.images
                .map(e => parseInt(e.id))
                .sort(e => (e === defaultImageId ? -1 : 1))
                .map(e => `${HOST}/${e}-large_default/image.jpg`);
            yield put(getProductImagesAction({ id, urls }));
        }
    } catch (error) {
        console.log(error);
    }
}
