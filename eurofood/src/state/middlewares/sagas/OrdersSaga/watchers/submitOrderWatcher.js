import { SUBMIT_ORDER } from './../../../../../constants/OrdersConstants';
import submitOrderSaga from './../actions/submitOrderSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* submitOrderWatcher() {
    yield takeLatest(SUBMIT_ORDER, submitOrderSaga);
}
