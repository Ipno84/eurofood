import { ADD_TO_CART } from './../../../../../constants/CartConstants';
import onAddToCardSaga from './../actions/onAddToCardSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* onAddToCartWatcher() {
    yield takeLatest(ADD_TO_CART, onAddToCardSaga);
}
