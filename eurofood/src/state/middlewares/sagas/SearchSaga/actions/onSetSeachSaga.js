import {
    all,
    call,
    cancel,
    delay,
    fork,
    put,
    select
} from 'redux-saga/effects';

import getSearchSelectedCategoryIdSelector from './../../../../selectors/SearchSelectors/getSearchSelectedCategoryIdSelector';
import getSearchTextSelector from './../../../../selectors/SearchSelectors/getSearchTextSelector';
import searchProductsCall from './../../../../../api/calls/SearchCalls/searchProductsCall';
import setProductsItemsAction from './../../../../actions/ProductsActions/setProductsItemsAction';
import setSearchResultsAction from './../../../../actions/SearchActions/setSearchResultsAction';

let searchTask;
export default function* onSetSeachSaga() {
    if (searchTask) yield cancel(searchTask);
    searchTask = yield fork(waitSearchTask);
}

function* waitSearchTask(minTime = 500) {
    try {
        yield delay(minTime);
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
            const results = yield call(searchProductsCall, params);
            console.log(results);
            // yield all([
            //     put(setProductsItemsAction(results.products))
            // ])
        }
    } catch (error) {
        yield put(setSearchResultsAction([]));
    }
}
