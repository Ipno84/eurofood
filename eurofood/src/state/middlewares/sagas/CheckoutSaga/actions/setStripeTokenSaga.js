import { put } from 'redux-saga/effects';
import submitOrderAction from './../../../../actions/OrdersActions/submitOrderAction';

export default function* setStripeTokenSaga({ token }) {
    try {
        if (token) yield put(submitOrderAction());
    } catch (error) {
        console.log(error);
    }
}
