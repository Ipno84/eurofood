import { GET_SEARCH_RESULTS } from './../../../../../constants/SearchConstants';
import { takeLatest } from 'redux-saga/effects';
import { waitSearchTaskSaga } from './../actions/onSetSeachSaga';

export default function* onSetSeachWatcher() {
    yield takeLatest(GET_SEARCH_RESULTS, waitSearchTaskSaga);
}
