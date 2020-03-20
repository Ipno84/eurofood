import { fork } from 'redux-saga/effects';
import purgeExpiredContentsWatcher from './watchers/purgeExpiredContentsWatcher';

export default function* CacheSaga() {
    yield fork(purgeExpiredContentsWatcher);
}
