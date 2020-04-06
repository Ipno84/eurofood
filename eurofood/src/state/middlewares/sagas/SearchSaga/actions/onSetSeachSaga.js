import {
    all,
    call,
    cancel,
    delay,
    fork,
    put,
    select
} from 'redux-saga/effects';

import NavigatorRef from './../../../../../helpers/NavigatorRef';
import { ROUTE_NAME_SEARCH_RESULTS } from '../../../../../constants/RouteConstants';
import { StackActions } from '@react-navigation/native';
import arrayToObject from '../../../../../helpers/arrayToObject';
import getSearchResultsAction from './../../../../actions/SearchActions/getSearchResultsAction';
import getSearchSelectedCategoryIdSelector from './../../../../selectors/SearchSelectors/getSearchSelectedCategoryIdSelector';
import getSearchTextSelector from './../../../../selectors/SearchSelectors/getSearchTextSelector';
import searchProductsCall from './../../../../../api/calls/SearchCalls/searchProductsCall';
import searchProductsMaxCountCall from './../../../../../api/calls/SearchCalls/searchProductsMaxCountCall';
import setProductsItemsAction from './../../../../actions/ProductsActions/setProductsItemsAction';
import setSearchResultsAction from './../../../../actions/SearchActions/setSearchResultsAction';

let searchTask;
export default function* onSetSeachSaga({ limit, offset }) {
    if (searchTask) yield cancel(searchTask);
    searchTask = yield fork(waitSearchTaskSaga, { limit, offset });
}

export function* waitSearchTaskSaga({ minTime = 500, limit, offset }) {
    try {
        //yield delay(minTime);
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
            const navRef = new NavigatorRef();
            const currentRouteName = navRef.getCurrentRouteName();
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
            if (currentRouteName !== ROUTE_NAME_SEARCH_RESULTS) {
                navRef.navigation.dispatch(
                    StackActions.push(ROUTE_NAME_SEARCH_RESULTS)
                );
            }
        }
    } catch (error) {
        yield all([
            put(setSearchResultsAction([])),
            put(getSearchResultsAction({ error }))
        ]);
    }
}
