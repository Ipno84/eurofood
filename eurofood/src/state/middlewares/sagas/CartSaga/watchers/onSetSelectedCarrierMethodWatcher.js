import { SET_SELECTED_CARRIER_METHOD } from './../../../../../constants/CheckoutConstants';
import onSetSelectedCarrierMethodSaga from './../actions/onSetSelectedCarrierMethodSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* onSetSelectedCarrierMethodWatcher() {
    yield takeLatest(
        SET_SELECTED_CARRIER_METHOD,
        onSetSelectedCarrierMethodSaga
    );
}
