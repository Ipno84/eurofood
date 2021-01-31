import { GET_CARRIERS } from './../../../../../constants/CarriersConstants';
import getCarriersSaga from './../actions/getCarriersSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* getCarriersWatcher() {
    yield takeLatest(GET_CARRIERS, getCarriersSaga);
}
