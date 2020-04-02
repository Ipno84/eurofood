import { call, put, select } from 'redux-saga/effects';

import getCurrentUserAddressAction from './../../../../actions/AddressesActions/getCurrentUserAddressAction';
import getCurrentUserAddressesCall from './../../../../../api/calls/AddressesCalls/getCurrentUserAddressesCall';
import getUserIdSelector from './../../../../selectors/ClientSelectors/getUserIdSelector';
import isUserLoggedInSelector from './../../../../selectors/ClientSelectors/isUserLoggedInSelector';

export default function* getCurrentUserAddressesSaga() {
    try {
        const isUserLoggedIn = yield select(isUserLoggedInSelector);
        if (isUserLoggedIn) {
            const userId = yield select(getUserIdSelector);
            const results = yield call(getCurrentUserAddressesCall, userId);
            if (results && results.addresses) {
                yield put(
                    getCurrentUserAddressAction({
                        success: true,
                        addresses: results.addresses
                    })
                );
            }
        }
    } catch (error) {
        yield put(getCurrentUserAddressAction({ error }));
    }
}
