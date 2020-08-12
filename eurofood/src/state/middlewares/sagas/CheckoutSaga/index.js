import { fork } from 'redux-saga/effects';
import setStripeTokenWatcher from './watchers/setStripeTokenWatcher';

export default function* CheckoutSaga() {
    yield fork(setStripeTokenWatcher);
}
