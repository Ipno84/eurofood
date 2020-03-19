import { fork } from 'redux-saga/effects';
import getServerSettingsWatcher from './watchers/getServerSettingsWatcher';

export default function* SettingsSaga() {
    yield fork(getServerSettingsWatcher);
}
