import { SUBMIT_BILLING_ADDRESS } from './../../../../../constants/ClientConstants';
import onSubmitBillingAddressSaga from './../actions/onSubmitBillingAddressSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* onSubmitBillingAddressWatcher() {
    yield takeLatest(SUBMIT_BILLING_ADDRESS, onSubmitBillingAddressSaga);
}
