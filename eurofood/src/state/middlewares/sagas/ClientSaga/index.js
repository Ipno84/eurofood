import { fork } from 'redux-saga/effects';
import onSubmitLoginWatcher from './watchers/onSubmitLoginWatcher';

export default function* ClientSaga() {
    yield fork(onSubmitLoginWatcher);
}
