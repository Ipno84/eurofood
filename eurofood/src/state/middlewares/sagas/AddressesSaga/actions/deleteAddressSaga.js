import { call, put } from 'redux-saga/effects';

import deleteAddressAction from './../../../../actions/AddressesActions/deleteAddressAction';
import deleteAddressCall from '../../../../../api/calls/AddressesCalls/deleteAddressCall';

export default function* deleteAddressSaga({ id }) {
    try {
        if (id) {
            yield call(deleteAddressCall, id);
            yield put(deleteAddressAction({ id, success: true }));
        }
    } catch (error) {
        yield put(deleteAddressAction({ error }));
    }
}
