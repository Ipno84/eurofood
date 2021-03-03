import { fork } from 'redux-saga/effects';
import getCarriersWatcher from './watchers/getCarriersWatcher';

export default function* CarriersSaga() {
    yield fork(getCarriersWatcher);
}
