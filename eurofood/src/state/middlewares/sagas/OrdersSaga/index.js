import { fork } from 'redux-saga/effects';
import getOrdersWatcher from './watchers/getOrdersWatcher';

export default function* OrdersSaga() {
    yield fork(getOrdersWatcher);
}
