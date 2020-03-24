import { call, put } from 'redux-saga/effects';

import arrayToObject from '../../../../../helpers/arrayToObject';
import getMissingProductsCall from './../../../../../api/calls/ProductsCalls/getMissingProductsCall';
import setProductsItemsAction from './../../../../actions/ProductsActions/setProductsItemsAction';

export default function* getMissingProductsSaga({ ids }) {
    try {
        const res = yield call(getMissingProductsCall, ids);
        const products = arrayToObject(res.products);
        yield put(setProductsItemsAction({ items: products }));
    } catch (error) {
        console.log(error);
    }
}
