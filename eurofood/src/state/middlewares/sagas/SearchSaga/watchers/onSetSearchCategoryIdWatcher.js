import { SET_SEARCH_SELECTED_CATEGORY_ID } from './../../../../../constants/SearchConstants';
import onSetSearchCategoryIdSaga from './../actions/onSetSearchCategoryIdSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* onSetSeachWatcher() {
    yield takeLatest(
        SET_SEARCH_SELECTED_CATEGORY_ID,
        onSetSearchCategoryIdSaga
    );
}
