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

let addToCartTask;
export default function* onAddToCartSaga({ id, quantity }) {
    try {
        const isUserLoggedIn = yield select(state =>
            isUserLoggedInSelector(state)
        );
        if (isUserLoggedIn) {
            const stockQuantity = yield select(state =>
                getProductStockQuantitySelector(state, id)
            );
            const cartQuantity = yield select(state =>
                getCurrentCartItemQuantitySelector(state, id)
            );

            let addToCartPayload = { id, success: true, quantity: 0 };
            if (
                cartQuantity === 0 &&
                stockQuantity &&
                quantity <= stockQuantity
            ) {
                addToCartPayload.quantity = quantity;
            } else if (
                cartQuantity &&
                stockQuantity &&
                cartQuantity + quantity <= stockQuantity
            ) {
                addToCartPayload.quantity = cartQuantity + quantity;
            }
            if (addToCartPayload.quantity)
                yield put(addToCartAction(addToCartPayload));

            // Handling Task
            if (addToCartTask) yield cancel(addToCartTask);
            addToCartTask = yield fork(onAddToCartSagaTask);
        }
    } catch (error) {
        console.log(error);
        yield put(addToCartAction({ error: true }));
    }
}

export function* onAddToCartSagaTask() {
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
