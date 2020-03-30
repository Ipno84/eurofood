import { GET_SERVER_SETTINGS } from './../../../../../constants/SettingsConstants';
import setCurrentCartIdCustomerSaga from './../actions/setCurrentCartIdCustomerSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* setCurrentCartIdCustomerWatcher() {
    yield takeLatest(GET_SERVER_SETTINGS, setCurrentCartIdCustomerSaga);
}
