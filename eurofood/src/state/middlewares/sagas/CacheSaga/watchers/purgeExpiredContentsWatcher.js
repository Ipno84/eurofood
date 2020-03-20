import { PURGE_EXPIRED_CONTENTS } from './../../../../../constants/CacheConstants';
import purgeExpiredContentsSaga from './../actions/purgeExpiredContentsSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* purgeExpiredContentsWatcher() {
    yield takeLatest(PURGE_EXPIRED_CONTENTS, purgeExpiredContentsSaga);
}
