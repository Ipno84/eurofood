import { fork } from 'redux-saga/effects';
import onSetSeachWatcher from './watchers/onSetSeachWatcher';

export default function* SearchSaga() {
    yield fork(onSetSeachWatcher);
}
