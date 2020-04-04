import { all, call, put } from 'redux-saga/effects';

import getServerSettingsAction from './../../../../actions/SettingsActions/getServerSettingsAction';
import getServerSettingsCall from './../../../../../api/calls/SettingsCalls/getServerSettingsCall';
import setHomeTemplateAction from './../../../../actions/SettingsActions/setHomeTemplateAction';

export default function* getServerSettingsSaga() {
    try {
        const { server, home } = yield call(getServerSettingsCall);
        yield all([
            put(getServerSettingsAction({ server })),
            put(setHomeTemplateAction({ home }))
        ]);
    } catch (error) {
        alert(error.message);
        yield put(getServerSettingsAction({ error }));
    }
}
