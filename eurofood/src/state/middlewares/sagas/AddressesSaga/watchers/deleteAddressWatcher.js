import { DELETE_ADDRESS } from './../../../../../constants/AddressConstants';
import deleteAddressSaga from './../actions/deleteAddressSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* deleteAddressWatcher() {
    yield takeLatest(DELETE_ADDRESS, deleteAddressSaga);
}
