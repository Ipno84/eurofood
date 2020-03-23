import { GET_MISSING_CATEGORIES } from './../../../../../constants/CategoriesConstants';
import getMissingCategoriesSaga from './../actions/getMissingCategoriesSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* getMissingCategoriesWatcher() {
    yield takeLatest(GET_MISSING_CATEGORIES, getMissingCategoriesSaga);
}
