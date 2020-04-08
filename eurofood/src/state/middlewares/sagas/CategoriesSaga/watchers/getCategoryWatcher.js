import { GET_CATEGORY } from './../../../../../constants/CategoriesConstants';
import getCategorySaga from './../actions/getCategorySaga';
import { takeEvery } from 'redux-saga/effects';

export default function* getCategoryWatcher() {
    yield takeEvery(GET_CATEGORY, getCategorySaga);
}
