import { GET_MAIN_SECTIONS } from './../../../../../constants/CategoriesConstants';
import getMainSectionsSaga from './../actions/getMainSectionsSaga';
import { takeEvery } from 'redux-saga/effects';

export default function* getMainSectionsWatcher() {
    yield takeEvery(GET_MAIN_SECTIONS, getMainSectionsSaga);
}
