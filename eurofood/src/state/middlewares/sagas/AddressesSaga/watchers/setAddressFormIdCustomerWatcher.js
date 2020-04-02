import { GET_SERVER_SETTINGS } from './../../../../../constants/SettingsConstants';
import setAddressFormIdCustomerSaga from './../actions/setAddressFormIdCustomerSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* setAddressFormIdCustomerWatcher() {
    yield takeLatest(GET_SERVER_SETTINGS, setAddressFormIdCustomerSaga);
}
