import { call, cancel, delay, fork, put, select } from 'redux-saga/effects';

import addToCartAction from './../../../../actions/CartActions/addToCartAction';
import createCartCall from './../../../../../api/calls/CartCalls/createCartCall';
import editCartCall from './../../../../../api/calls/CartCalls/editCartCall';
import getCurrentCartIdSelector from './../../../../selectors/CartSelectors/getCurrentCartIdSelector';
import getCurrentCartItemQuantitySelector from './../../../../selectors/CartSelectors/getCurrentCartItemQuantitySelector';
import getCurrentCartSelector from './../../../../selectors/CartSelectors/getCurrentCartSelector';
import getProductStockQuantitySelector from './../../../../selectors/ProductsSelectors/getProductStockQuantitySelector';
import isUserLoggedInSelector from './../../../../selectors/ClientSelectors/isUserLoggedInSelector';
import setCurrentCartAction from './../../../../actions/CartActions/setCurrentCartAction';

let editCartTask;
export default function* onEditCartSaga({ id, quantity }) {
    try {
        const isUserLoggedIn = yield select(state =>
            isUserLoggedInSelector(state)
        );
        if (isUserLoggedIn) {
            if (editCartTask) yield cancel(editCartTask);
            editCartTask = yield fork(onEditCartSagaTask);
        }
    } catch (error) {
        console.log(error);
    }
}

export function* onEditCartSagaTask() {
    try {
        yield delay(1000);
        const isUserLoggedIn = yield select(state =>
            isUserLoggedInSelector(state)
        );
        const currentCartId = yield select(state =>
            getCurrentCartIdSelector(state)
        );
        if (isUserLoggedIn) {
            const currentCart = yield select(state =>
                getCurrentCartSelector(state)
            );
            if (currentCart) {
                let result = null;
                if (currentCartId) {
                    result = yield call(editCartCall, currentCart);
                } else result = yield call(createCartCall, currentCart);
                if (result && result.cart) {
                    let cart = result.cart;
                    if (!cart.associations) {
                        cart = {
                            ...cart,
                            associations: {
                                cart_rows: []
                            }
                        };
                    }
                    yield put(setCurrentCartAction(cart));
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
}
