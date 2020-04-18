import { all, call, put, select } from 'redux-saga/effects';

import arrayToObject from '../../../../../helpers/arrayToObject';
import getAssociatedCategoriesSelector from './../../../../selectors/CategoriesSelectors/getAssociatedCategoriesSelector';
import getAssociatedProductsCountSelector from './../../../../selectors/CategoriesSelectors/getAssociatedProductsCountSelector';
import getCategoryAction from './../../../../actions/CategoriesActions/getCategoryAction';
import getCategoryCall from './../../../../../api/calls/CategoriesCalls/getCategoryCall';
import setCategoriesItemsAction from './../../../../actions/CategoriesActions/setCategoriesItemsAction';
import setProductsItemsAction from './../../../../actions/ProductsActions/setProductsItemsAction';
import setProductsSpecificPricesAction from './../../../../actions/ProductsActions/setProductsSpecificPricesAction';

export default function* getCategorySaga({ id }) {
    try {
        const productsCount = yield select(state =>
            getAssociatedProductsCountSelector(state, id)
        );
        if (productsCount) {
            yield put(getCategoryAction({ success: true }));
        } else {
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
                const associatedProducts = res.category.products;
                if (associatedProducts && associatedProducts.length) {
                    res.category = {
                        ...res.category,
                        associations: {
                            ...res.category.associations,
                            products: associatedProducts
                                .map(e =>
                                    e && typeof e === 'object'
                                        ? {
                                              id: e.id
                                          }
                                        : null
                                )
                                .filter(e => e)
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
        }
    } catch (error) {
        console.log(error);
        yield put(getCategoryAction({ error }));
    }
}
