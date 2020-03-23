import {
    GET_SEARCH_RESULTS,
    SET_SEARCH_SELECTED_CATEGORY_ID,
    SET_SEARCH_TEXT
} from './../../../../../constants/SearchConstants';
import onSetSeachSaga, {
    waitSearchTaskSaga
} from './../actions/onSetSeachSaga';

import { takeLatest } from 'redux-saga/effects';

export default function* onSetSeachWatcher() {
    yield takeLatest(SET_SEARCH_SELECTED_CATEGORY_ID, onSetSeachSaga);
    yield takeLatest(SET_SEARCH_TEXT, onSetSeachSaga);
    yield takeLatest(GET_SEARCH_RESULTS, waitSearchTaskSaga);
}
