import { all, call, cancel, fork, put, select } from 'redux-saga/effects';

import NavigatorRef from './../../../../../helpers/NavigatorRef';
import { ROUTE_NAME_SEARCH_RESULTS } from '../../../../../constants/RouteConstants';
import { StackActions } from '@react-navigation/native';
import arrayToObject from '../../../../../helpers/arrayToObject';
import getAssociatedCategoriesSelector from './../../../../selectors/CategoriesSelectors/getAssociatedCategoriesSelector';
import getCategoryAction from './../../../../actions/CategoriesActions/getCategoryAction';
import getCategoryCall from './../../../../../api/calls/CategoriesCalls/getCategoryCall';
import getSearchResultsAction from './../../../../actions/SearchActions/getSearchResultsAction';
import getSearchSelectedCategoryIdSelector from './../../../../selectors/SearchSelectors/getSearchSelectedCategoryIdSelector';
import getSearchTextSelector from './../../../../selectors/SearchSelectors/getSearchTextSelector';
import searchProductsCall from './../../../../../api/calls/SearchCalls/searchProductsCall';
import searchProductsMaxCountCall from './../../../../../api/calls/SearchCalls/searchProductsMaxCountCall';
import setCategoriesItemsAction from './../../../../actions/CategoriesActions/setCategoriesItemsAction';
import setProductsItemsAction from './../../../../actions/ProductsActions/setProductsItemsAction';
import setProductsSpecificPricesAction from './../../../../actions/ProductsActions/setProductsSpecificPricesAction';
import setSearchResultsAction from './../../../../actions/SearchActions/setSearchResultsAction';

let searchTask;
export default function* onSetSeachSaga({ limit, offset }) {
    if (searchTask) yield cancel(searchTask);
    searchTask = yield fork(waitSearchTaskSaga, { limit, offset });
}

export function* waitSearchTaskSaga({ limit, offset }) {
    try {
        const searchText = yield select(getSearchTextSelector);
        const selectedCategoryId = yield select(
            getSearchSelectedCategoryIdSelector
        );
        if (searchText && searchText.length > 3) {
            let params = { searchText };
            if (selectedCategoryId && selectedCategoryId != -1) {
                params = {
                    ...params,
                    selectedCategoryId
                };
            }
            if (limit) params = { ...params, limit };
            if (offset) params = { ...params, offset };

            if (!params.selectedCategoryId) {
                const res = yield all([
                    call(searchProductsCall, params),
                    call(searchProductsMaxCountCall, params)
                ]);
                const results = res[0];
                const count =
                    res[1] && res[1].products ? res[1].products.length : 0;
                const products = arrayToObject(results.products);
                const productIds =
                    !results || !results.products
                        ? []
                        : results.products.map(e => e.id);
                if (limit && offset) {
                    yield all([
                        put(
                            getSearchResultsAction({
                                success: true,
                                ids: productIds,
                                count
                            })
                        ),
                        put(setProductsItemsAction({ items: products }))
                    ]);
                } else {
                    yield all([
                        put(setSearchResultsAction(productIds, count)),
                        put(setProductsItemsAction({ items: products }))
                    ]);
                }
            } else {
                const res = yield call(
                    getCategoryCall,
                    params.selectedCategoryId
                );

                // HANDLE CATEGORY - START
                if (res.category && res.products) {
                    const associatedCategories = yield select(
                        getAssociatedCategoriesSelector,
                        params.selectedCategoryId
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
                //HANDLE CATEGORY - END
                if (searchText && res && res.products) {
                    const searchResults = res.products.filter(
                        e =>
                            e.name
                                .toLowerCase()
                                .indexOf(searchText.toLowerCase()) > -1
                    );
                    const productIds = searchResults.map(e => e.id);

                    yield put(
                        setSearchResultsAction(productIds, productIds.length)
                    );
                }
            }
            const navRef = new NavigatorRef();
            const currentRouteName = navRef.getCurrentRouteName();

            if (currentRouteName !== ROUTE_NAME_SEARCH_RESULTS) {
                navRef.navigation.dispatch(
                    StackActions.push(ROUTE_NAME_SEARCH_RESULTS)
                );
            }
        }
    } catch (error) {
        console.log(error);
        yield all([
            put(setSearchResultsAction([])),
            put(getSearchResultsAction({ error })),
            put(getCategoryAction({ error }))
        ]);
    }
}
