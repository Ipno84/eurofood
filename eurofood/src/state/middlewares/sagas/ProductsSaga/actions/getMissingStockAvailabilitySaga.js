import { all, call, put, select } from 'redux-saga/effects';

import arrayToObject from '../../../../../helpers/arrayToObject';
import getMissingStockAvailabilityCall from './../../../../../api/calls/ProductsCalls/getMissingStockAvailabilityCall';
import getProductStockAvailabilitySelector from './../../../../selectors/ProductsSelectors/getProductStockAvailabilitySelector';
import setProductsStockAvailabilitiesAction from './../../../../actions/ProductsActions/setProductsStockAvailabilitiesAction';

export default function* getMissingStockAvailabilitySaga({ ids }) {
    try {
        let stockIds = yield all(
            ids.map(function*(id) {
                const stockAvailability = yield select(
                    getProductStockAvailabilitySelector,
                    id
                );
                if (!stockAvailability) return id;
                return null;
            })
        );
        stockIds = stockIds.filter(e => e);
        let calls = [];
        if (stockIds && stockIds.length)
            calls.push(call(getMissingStockAvailabilityCall, stockIds));
        if (calls.length) {
            const results = yield all(calls);
            let actions = [];
            let stockAvailabilities =
                results && results[0] && results[0].stock_availables
                    ? results[0].stock_availables
                    : null;
            if (stockAvailabilities) {
                stockAvailabilities = arrayToObject(
                    stockAvailabilities,
                    'id_product'
                );
                actions.push(
                    put(
                        setProductsStockAvailabilitiesAction({
                            stockAvailabilities
                        })
                    )
                );
            }
            if (actions.length) {
                yield all(actions);
            }
        }
    } catch (error) {
        console.log(error);
    }
}
