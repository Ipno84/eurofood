import { BACKORDER } from './../../../../../constants/CartConstants';
import backorderSaga from './../actions/backorderSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* backorderWatcher() {
    yield takeLatest(BACKORDER, backorderSaga);
}
