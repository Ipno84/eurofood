import { fork } from 'redux-saga/effects';
import onAddToCartWatcher from './watchers/onAddToCartWatcher';

export default function* CartSaga() {
    yield fork(onAddToCartWatcher);
}
