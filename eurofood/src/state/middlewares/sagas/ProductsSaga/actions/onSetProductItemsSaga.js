import { all, call, put } from 'redux-saga/effects';

import arrayToObject from '../../../../../helpers/arrayToObject';
import getMissingPricesCall from './../../../../../api/calls/ProductsCalls/getMissingPricesCall';
import getMissingStockAvailabilityCall from './../../../../../api/calls/ProductsCalls/getMissingStockAvailabilityCall';
import setProductsSpecificPricesAction from './../../../../actions/ProductsActions/setProductsSpecificPricesAction';
import setProductsStockAvailabilitiesAction from './../../../../actions/ProductsActions/setProductsStockAvailabilitiesAction';

export default function* onSetProductItemsSaga({ items, force }) {
    try {
        if (!force) {
            const productIds = Object.keys(items);
            const results = yield all([
                call(getMissingPricesCall, productIds),
                call(getMissingStockAvailabilityCall, productIds)
            ]);
            const specificPrices = arrayToObject(
                results[0].specific_prices,
                'id_product'
            );
            const stockAvailabilities = arrayToObject(
                results[1].stock_availables,
                'id_product'
            );
            yield all([
                put(setProductsSpecificPricesAction({ specificPrices })),
                put(
                    setProductsStockAvailabilitiesAction({
                        stockAvailabilities
                    })
                )
            ]);
        }

        // const res = yield call(getMissingProductsCall, ids);
        // const products = arrayToObject(res.products);
        // yield put(setProductsItemsAction({ items: products }));
    } catch (error) {
        console.log(error);
    }
}
