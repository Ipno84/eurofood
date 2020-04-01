import { fork } from 'redux-saga/effects';
import getServerSettingsWatcher from './watchers/getServerSettingsWatcher';
import setHomeViewableItemsWatcher from './watchers/setHomeViewableItemsWatcher';

export default function* SettingsSaga() {
    yield fork(getServerSettingsWatcher);
    yield fork(setHomeViewableItemsWatcher);
}
