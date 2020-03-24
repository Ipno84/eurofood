import { fork } from 'redux-saga/effects';
import getMissingProductsWatcher from './watchers/getMissingProductsWatcher';
import onSetProductItemsWatcher from './watchers/onSetProductItemsWatcher';

export default function* ProductsSaga() {
    yield fork(getMissingProductsWatcher);
    yield fork(onSetProductItemsWatcher);
}
