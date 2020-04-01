import {
    all,
    call,
    cancel,
    delay,
    fork,
    put,
    select
} from 'redux-saga/effects';

import arrayToObject from '../../../../../helpers/arrayToObject';
import getMissingProductsAction from './../../../../actions/ProductsActions/getMissingProductsAction';
import getMissingProductsCall from './../../../../../api/calls/ProductsCalls/getMissingProductsCall';
import getMissingProductsIdSelector from './../../../../selectors/ProductsSelectors/getMissingProductsIdSelector';
import getProductsItemsSelector from './../../../../selectors/ProductsSelectors/getProductsItemsSelector';
import onlyUniqueFilter from '../../../../../helpers/onlyUniqueFilter';
import setProductsItemsAction from './../../../../actions/ProductsActions/setProductsItemsAction';

let getMissingProductsTask;
export default function* getMissingProductsSaga({ ids }) {
    if (getMissingProductsTask) yield cancel(getMissingProductsTask);
    getMissingProductsTask = yield fork(getMissingProductsSagaTask);
}

export function* getMissingProductsSagaTask() {
    try {
        yield delay(500);
        let ids = yield select(getMissingProductsIdSelector);
        const items = yield select(getProductsItemsSelector);
        let itemsId = items ? Object.keys(items).map(id => String(id)) : [];
        ids = ids
            .map(id => String(id))
            .filter(onlyUniqueFilter)
            .filter(e => !itemsId.includes(e));
        if (!ids || (ids && ids.length === 0)) {
            yield put(getMissingProductsAction(null, { success: true }));
        } else {
            const res = yield call(getMissingProductsCall, ids);
            if (res && res.products && res.products.length) {
                const products = arrayToObject(res.products);
                yield all([
                    put(setProductsItemsAction({ items: products })),
                    put(getMissingProductsAction(null, { success: true }))
                ]);
            }
        }
    } catch (error) {
        console.log(error);
        yield put(getMissingProductsAction(null, { error }));
    }
}
