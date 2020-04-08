import {
    actionChannel,
    all,
    call,
    cancel,
    delay,
    fork,
    put,
    select,
    spawn,
    take
} from 'redux-saga/effects';

import { GET_CATEGORY } from '../../../../../constants/CategoriesConstants';
import { SUCCESS } from '../../../../../constants/BaseConstants';
import arrayToObject from '../../../../../helpers/arrayToObject';
import { buffers } from 'redux-saga';
import getAssociatedCategoriesSelector from './../../../../selectors/CategoriesSelectors/getAssociatedCategoriesSelector';
import getCategoryAction from './../../../../actions/CategoriesActions/getCategoryAction';
import getCategoryCall from './../../../../../api/calls/CategoriesCalls/getCategoryCall';
import setCategoriesItemsAction from './../../../../actions/CategoriesActions/setCategoriesItemsAction';
import setProductsItemsAction from './../../../../actions/ProductsActions/setProductsItemsAction';
import setProductsSpecificPricesAction from './../../../../actions/ProductsActions/setProductsSpecificPricesAction';

export default function* getCategorySaga({ id }) {
    try {
        const res = yield call(getCategoryCall, id);
        if (res.category && res.products) {
            const associatedCategories = yield select(
                getAssociatedCategoriesSelector,
                id
            );
            if (associatedCategories) {
                res.category = {
                    ...res.category,
                    associations: {
                        ...res.category.associations,
                        categories: associatedCategories
                    }
                };
            }
            const categories = arrayToObject([res.category]);
            const products = arrayToObject(res.products);
            const specificPrices = arrayToObject(
                res.products.map(product => product.specific_prices),
                'id_product'
            );
            yield all([
                put(
                    setCategoriesItemsAction({
                        items: categories
                    })
                ),
                put(setProductsItemsAction({ items: products })),
                put(
                    setProductsSpecificPricesAction({
                        specificPrices
                    })
                ),
                put(getCategoryAction({ success: true }))
            ]);
        }
    } catch (error) {
        console.log(error);
        yield put(getCategoryAction({ error }));
    }
}
