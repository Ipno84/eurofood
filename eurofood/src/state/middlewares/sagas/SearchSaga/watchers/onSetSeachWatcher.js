import {
    SET_SEARCH_SELECTED_CATEGORY_ID,
    SET_SEARCH_TEXT
} from './../../../../../constants/SearchConstants';

import onSetSeachSaga from './../actions/onSetSeachSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* onSetSeachWatcher() {
    yield takeLatest(SET_SEARCH_SELECTED_CATEGORY_ID, onSetSeachSaga);
    yield takeLatest(SET_SEARCH_TEXT, onSetSeachSaga);
}
