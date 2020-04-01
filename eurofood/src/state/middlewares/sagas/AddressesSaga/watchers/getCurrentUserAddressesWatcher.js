import { GET_USER_ADDRESSES } from './../../../../../constants/AddressConstants';
import getCurrentUserAddressesSaga from './../actions/getCurrentUserAddressesSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* getCurrentUserAddressesWatcher() {
    yield takeLatest(GET_USER_ADDRESSES, getCurrentUserAddressesSaga);
}
