import { all, call, put, select } from 'redux-saga/effects';

import arrayToObject from '../../../../../helpers/arrayToObject';
import getMissingPricesCall from './../../../../../api/calls/ProductsCalls/getMissingPricesCall';
import getMissingStockAvailabilityCall from './../../../../../api/calls/ProductsCalls/getMissingStockAvailabilityCall';
import getProductSpecificPriceSelector from './../../../../selectors/ProductsSelectors/getProductSpecificPriceSelector';
import getProductStockAvailabilitySelector from './../../../../selectors/ProductsSelectors/getProductStockAvailabilitySelector';
import setProductsSpecificPricesAction from './../../../../actions/ProductsActions/setProductsSpecificPricesAction';
import setProductsStockAvailabilitiesAction from './../../../../actions/ProductsActions/setProductsStockAvailabilitiesAction';

export default function* onSetProductItemsSaga({ items, force }) {
    try {
        if (!force) {
            const productIds = Object.keys(items);
            let priceIds = yield all(
                productIds.map(function*(id) {
                    const specificPrice = yield select(
                        getProductSpecificPriceSelector,
                        id
                    );
                    if (!specificPrice) return id;
                    return null;
                })
            );
            priceIds = priceIds.filter(e => e);
            let stockIds = yield all(
                productIds.map(function*(id) {
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
            if (priceIds && priceIds.length)
                calls.push(call(getMissingPricesCall, priceIds));
            if (stockIds && stockIds.length)
                calls.push(call(getMissingStockAvailabilityCall, stockIds));
            if (calls.length) {
                const results = yield all(calls);
                let actions = [];
                let specificPrices =
                    results && results[0] && results[0].specific_prices
                        ? results[0].specific_prices
                        : null;
                let stockAvailabilities =
                    results && results[1] && results[1].stock_availables
                        ? results[1].stock_availables
                        : null;
                if (specificPrices) {
                    specificPrices = arrayToObject(
                        specificPrices,
                        'id_product'
                    );
                    actions.push(
                        put(setProductsSpecificPricesAction({ specificPrices }))
                    );
                }
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
        }
    } catch (error) {
        console.log(error);
    }
}
