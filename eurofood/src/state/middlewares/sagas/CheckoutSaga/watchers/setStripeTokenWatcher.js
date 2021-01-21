import { SET_STRIPE_TOKEN } from './../../../../../constants/CheckoutConstants';
import setStripeTokenSaga from './../actions/setStripeTokenSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* setStripeTokenWatcher() {
    yield takeLatest(SET_STRIPE_TOKEN, setStripeTokenSaga);
}
