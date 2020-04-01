import {
    LOGIN_EMAIL_ERROR,
    LOGIN_PASSWORD_ERROR
} from './../../../../../constants/ErrorsConstants';
import ValidationError, {
    VALIDATION_CLASS_NAME
} from './../../../../../helpers/ValidationError';
import { all, call, put, select } from 'redux-saga/effects';

import { CommonActions } from '@react-navigation/native';
import NavigatorRef from './../../../../../helpers/NavigatorRef';
import { ROUTE_NAME_HOME } from '../../../../../constants/RouteConstants';
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
            console.log(results);
        }
    } catch (error) {
        console.log(error);
        yield put(getCurrentUserAddressAction({ error }));
    }
}
