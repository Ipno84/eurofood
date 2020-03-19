import { GET_SERVER_SETTINGS } from './../../../../../constants/SettingsConstants';
import getServerSettingsSaga from './../actions/getServerSettingsSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* getServerSettingsWatcher() {
    yield takeLatest(GET_SERVER_SETTINGS, getServerSettingsSaga);
}
