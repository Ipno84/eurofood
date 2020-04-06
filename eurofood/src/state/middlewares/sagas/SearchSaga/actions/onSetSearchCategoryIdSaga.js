import { put, select } from 'redux-saga/effects';

import getSearchResultsAction from './../../../../actions/SearchActions/getSearchResultsAction';
import getSearchTextSelector from './../../../../selectors/SearchSelectors/getSearchTextSelector';

export default function* onSetSearchCategoryIdSaga() {
    try {
        const searchText = yield select(getSearchTextSelector);
        if (searchText && searchText.length > 3) {
            yield put(getSearchResultsAction({ limit: 10 }));
        }
    } catch (error) {
        yield put(getSearchResultsAction({ error }));
    }
}
