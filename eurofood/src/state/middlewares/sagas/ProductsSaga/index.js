import { fork } from 'redux-saga/effects';
import getMissingProductsWatcher from './watchers/getMissingProductsWatcher';

export default function* ProductsSaga() {
    yield fork(getMissingProductsWatcher);
}
