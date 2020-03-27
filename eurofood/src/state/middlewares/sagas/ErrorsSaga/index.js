import { fork } from 'redux-saga/effects';
import resetErrorHookWatcher from './watchers/resetErrorHookWatcher';

export default function* ErrorsSaga() {
    yield fork(resetErrorHookWatcher);
}
