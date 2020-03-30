import { call, put, select } from 'redux-saga/effects';

import createCartCall from './../../../../../api/calls/CartCalls/createCartCall';
import editCartCall from './../../../../../api/calls/CartCalls/editCartCall';
import getCurrentCartIdSelector from './../../../../selectors/CartSelectors/getCurrentCartIdSelector';
import getCurrentCartSelector from './../../../../selectors/CartSelectors/getCurrentCartSelector';
import isUserLoggedInSelector from './../../../../selectors/ClientSelectors/isUserLoggedInSelector';
import setCurrentCartAction from './../../../../actions/CartActions/setCurrentCartAction';

export default function* onEmptyCartSaga() {
    try {
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
