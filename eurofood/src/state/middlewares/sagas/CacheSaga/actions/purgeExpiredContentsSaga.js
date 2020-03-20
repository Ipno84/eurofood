import { all, call, put, select } from 'redux-saga/effects';

import getCategoriesItemsSelector from './../../../../selectors/CategoriesSelectors/getCategoriesItemsSelector';
import getMaxExpirationTimeSelector from './../../../../selectors/CacheSelectors/getMaxExpirationTimeSelector';
import getProductsItemsSelector from './../../../../selectors/ProductsSelectors/getProductsItemsSelector';
import purgeExpiredContentsAction from './../../../../actions/CacheActions/purgeExpiredContentsAction';
import purgeObject from '../../../../../helpers/purgeObject';
import setCategoriesItemsAction from './../../../../actions/CategoriesActions/setCategoriesItemsAction';
import setProductsItemsAction from './../../../../actions/ProductsActions/setProductsItemsAction';

export default function* purgeExpiredContentsSaga() {
    try {
        const maxExpirationTime = yield select(getMaxExpirationTimeSelector);
        const categoriesItems = yield select(getCategoriesItemsSelector);
        const productsItems = yield select(getProductsItemsSelector);
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
            put(purgeExpiredContentsAction({ purged: true }))
        ]);
    } catch (error) {
        yield put(purgeExpiredContentsAction({ purged: false }));
    }
}
