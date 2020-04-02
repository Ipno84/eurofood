import { SUBMIT_ADDRESS } from './../../../../../constants/AddressConstants';
import submitAddressSaga from './../actions/submitAddressSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* submitAddressWatcher() {
    yield takeLatest(SUBMIT_ADDRESS, submitAddressSaga);
}
