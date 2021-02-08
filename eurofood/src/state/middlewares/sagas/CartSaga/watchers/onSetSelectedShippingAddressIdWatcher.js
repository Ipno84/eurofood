import { SET_SELECTED_SHIPPING_ADDRESS_ID } from './../../../../../constants/CartConstants';
import onSetSelectedShippingAddressIdSaga from './../actions/onSetSelectedShippingAddressIdSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* onSetSelectedShippingAddressIdWatcher() {
    yield takeLatest(
        SET_SELECTED_SHIPPING_ADDRESS_ID,
        onSetSelectedShippingAddressIdSaga
    );
}
