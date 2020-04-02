import { fork } from 'redux-saga/effects';
import getOrdersWatcher from './watchers/getOrdersWatcher';
import submitOrderWatcher from './watchers/submitOrderWatcher';

export default function* OrdersSaga() {
    yield fork(getOrdersWatcher);
    yield fork(submitOrderWatcher);
}
