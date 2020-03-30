import { put, select } from 'redux-saga/effects';

import getUserIdSelector from './../../../../selectors/ClientSelectors/getUserIdSelector';
import setCurrentCartIdCustomerAction from './../../../../actions/CartActions/setCurrentCartIdCustomerAction';

export default function* setCurrentCartIdCustomerSaga() {
    try {
        const userId = yield select(getUserIdSelector);
        yield put(setCurrentCartIdCustomerAction(userId));
    } catch (error) {}
}
