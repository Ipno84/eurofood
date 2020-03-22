import { all, put, select } from 'redux-saga/effects';

import getCacheSelector from './../../../../selectors/CacheSelectors/getCacheSelector';
import getCategoriesItemsSelector from './../../../../selectors/CategoriesSelectors/getCategoriesItemsSelector';
import getMaxExpirationTimeSelector from './../../../../selectors/CacheSelectors/getMaxExpirationTimeSelector';
import getProductsItemsSelector from './../../../../selectors/ProductsSelectors/getProductsItemsSelector';
import purgeExpiredContentsAction from './../../../../actions/CacheActions/purgeExpiredContentsAction';
import purgeObject from '../../../../../helpers/purgeObject';
import setCacheItemsAction from './../../../../actions/CacheActions/setCacheItemsAction';
import setCategoriesItemsAction from './../../../../actions/CategoriesActions/setCategoriesItemsAction';
import setProductsItemsAction from './../../../../actions/ProductsActions/setProductsItemsAction';

export default function* purgeExpiredContentsSaga() {
    try {
        const maxExpirationTime = yield select(getMaxExpirationTimeSelector);
        const categoriesItems = yield select(getCategoriesItemsSelector);
        const productsItems = yield select(getProductsItemsSelector);
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
                setCacheItemsAction({
                    items: purgeObject(cacheItems, maxExpirationTime)
                })
            ),
            put(purgeExpiredContentsAction({ purged: true }))
        ]);
    } catch (error) {
        yield put(purgeExpiredContentsAction({ purged: false }));
    }
}
