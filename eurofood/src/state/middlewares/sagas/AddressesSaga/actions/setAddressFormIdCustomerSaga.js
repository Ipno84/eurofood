import { put, select } from 'redux-saga/effects';

import getUserIdSelector from './../../../../selectors/ClientSelectors/getUserIdSelector';
import setAddressFormKeyAction from './../../../../actions/AddressesActions/setAddressFormKeyAction';

export default function* setAddressFormIdCustomerSaga() {
    try {
        const userId = yield select(getUserIdSelector);
        yield put(setAddressFormKeyAction('id_customer', userId));
    } catch (error) {}
}
