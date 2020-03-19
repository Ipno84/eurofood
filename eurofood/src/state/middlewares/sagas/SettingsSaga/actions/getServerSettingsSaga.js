import { call, put } from 'redux-saga/effects';

import getServerSettingsAction from './../../../../actions/SettingsActions/getServerSettingsAction';
import getServerSettingsCall from './../../../../../api/calls/SettingsCalls/getServerSettingsCall';

export default function* getServerSettingsSaga() {
    try {
        const server = yield call(getServerSettingsCall);
        if (server) {
            yield put(getServerSettingsAction({ server }));
        } else throw new Error(`Something's gone wrong`);
    } catch (error) {
        yield put(getServerSettingsAction({ error }));
    }
}
