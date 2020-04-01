import { SET_HOME_VIEWABLE_ITEMS } from './../../../../../constants/SettingsConstants';
import setHomeViewableItemsSaga from './../actions/setHomeViewableItemsSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* setHomeViewableItemsWatcher() {
    yield takeLatest(SET_HOME_VIEWABLE_ITEMS, setHomeViewableItemsSaga);
}
