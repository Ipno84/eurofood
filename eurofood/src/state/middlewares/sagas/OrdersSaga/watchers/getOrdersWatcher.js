import { GET_ORDERS } from './../../../../../constants/OrdersConstants';
import getOrdersSaga from './../actions/getOrdersSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* getOrdersWatcher() {
    yield takeLatest(GET_ORDERS, getOrdersSaga);
}
