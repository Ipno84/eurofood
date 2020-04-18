import { all, call, put, select } from 'redux-saga/effects';

import arrayToObject from '../../../../../helpers/arrayToObject';
import getCurrentUserOrdersCall from './../../../../../api/calls/OrdersCall/getCurrentUserOrdersCall';
import getOrdersAction from './../../../../actions/OrdersActions/getOrdersAction';
import getUserIdSelector from './../../../../selectors/ClientSelectors/getUserIdSelector';
import setOrdersItemsAction from './../../../../actions/OrdersActions/setOrdersItemsAction';

export default function* getOrdersSaga() {
    try {
        const currentUserId = yield select(getUserIdSelector);
        if (currentUserId) {
            const res = yield call(getCurrentUserOrdersCall, currentUserId);
            if (res && res.orders) {
                const items = arrayToObject(res.orders);
                const orders =
                    !res || !res.orders
                        ? []
                        : res.orders
                              .map(e =>
                                  e && typeof e === 'object' ? e.id : null
                              )
                              .filter(e => e);
                yield all([
                    put(getOrdersAction({ orders, success: true })),
                    put(setOrdersItemsAction({ items }))
                ]);
            }
        }
    } catch (error) {
        yield put(getOrdersAction({ error }));
    }
}
