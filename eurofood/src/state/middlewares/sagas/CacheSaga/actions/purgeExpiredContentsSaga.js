import { all, put, select } from 'redux-saga/effects';

import getCacheSelector from './../../../../selectors/CacheSelectors/getCacheSelector';
import getCategoriesItemsSelector from './../../../../selectors/CategoriesSelectors/getCategoriesItemsSelector';
import getMaxExpirationTimeSelector from './../../../../selectors/CacheSelectors/getMaxExpirationTimeSelector';
import getProductsItemsSelector from './../../../../selectors/ProductsSelectors/getProductsItemsSelector';
import getProductsSpecificPricesSelector from './../../../../selectors/ProductsSelectors/getProductsSpecificPricesSelector';
import getProductsStockAvailabilitiesSelector from './../../../../selectors/ProductsSelectors/getProductsStockAvailabilitiesSelector';
import purgeExpiredContentsAction from './../../../../actions/CacheActions/purgeExpiredContentsAction';
import purgeObject from '../../../../../helpers/purgeObject';
import setCacheItemsAction from './../../../../actions/CacheActions/setCacheItemsAction';
import setCategoriesItemsAction from './../../../../actions/CategoriesActions/setCategoriesItemsAction';
import setProductsItemsAction from './../../../../actions/ProductsActions/setProductsItemsAction';
import setProductsSpecificPricesAction from './../../../../actions/ProductsActions/setProductsSpecificPricesAction';
import setProductsStockAvailabilitiesAction from './../../../../actions/ProductsActions/setProductsStockAvailabilitiesAction';

export default function* purgeExpiredContentsSaga() {
    try {
        const maxExpirationTime = yield select(getMaxExpirationTimeSelector);
        const categoriesItems = yield select(getCategoriesItemsSelector);
        const productsItems = yield select(getProductsItemsSelector);
        const specificPrices = yield select(getProductsSpecificPricesSelector);
        const stockAvailabilities = yield select(
            getProductsStockAvailabilitiesSelector
        );
        const cacheItems = yield select(getCacheSelector);
        yield all([
            put(
                setCategoriesItemsAction({
                    items: purgeObject(categoriesItems, maxExpirationTime),
                    force: true
                })
            ),
            put(
                setProductsItemsAction({
                    items: purgeObject(productsItems, maxExpirationTime),
                    force: true
                })
            ),
            put(
                setProductsSpecificPricesAction({
                    specificPrices: purgeObject(
                        specificPrices,
                        maxExpirationTime
                    ),
                    force: true
                })
            ),
            put(
                setProductsStockAvailabilitiesAction({
                    stockAvailabilities: purgeObject(
                        stockAvailabilities,
                        maxExpirationTime
                    ),
                    force: true
                })
            ),
            put(
                setCacheItemsAction({
                    items: purgeObject(cacheItems, maxExpirationTime)
                })
            ),
            put(purgeExpiredContentsAction({ purged: true }))
        ]);
    } catch (error) {
        console.log(error);
        yield put(purgeExpiredContentsAction({ purged: false }));
    }
}
