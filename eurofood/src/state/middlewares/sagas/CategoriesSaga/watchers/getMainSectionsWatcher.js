import { GET_MAIN_SECTIONS } from './../../../../../constants/CategoriesConstants';
import getMainSectionsSaga from './../actions/getMainSectionsSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* getMainSectionsWatcher() {
    yield takeLatest(GET_MAIN_SECTIONS, getMainSectionsSaga);
}
