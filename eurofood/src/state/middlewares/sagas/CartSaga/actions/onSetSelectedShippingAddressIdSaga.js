import { call, cancel, delay, fork, put, select } from 'redux-saga/effects';

import createCartCall from './../../../../../api/calls/CartCalls/createCartCall';
import editCartCall from './../../../../../api/calls/CartCalls/editCartCall';
import getCurrentCartIdSelector from './../../../../selectors/CartSelectors/getCurrentCartIdSelector';
import getCurrentCartSelector from './../../../../selectors/CartSelectors/getCurrentCartSelector';
import isUserLoggedInSelector from './../../../../selectors/ClientSelectors/isUserLoggedInSelector';
import setCurrentCartAction from './../../../../actions/CartActions/setCurrentCartAction';

let onSetSelectedShippingAddressIdTask;
export default function* onEditCaonSetSelectedShippingAddressIdSagartSaga({
    id
}) {
    try {
        const isUserLoggedIn = yield select(state =>
            isUserLoggedInSelector(state)
        );
        if (isUserLoggedIn) {
            if (onSetSelectedShippingAddressIdTask)
                yield cancel(onSetSelectedShippingAddressIdTask);
            onSetSelectedShippingAddressIdTask = yield fork(
                onSetSelectedShippingAddressIdSagaTask,
                id
            );
        }
    } catch (error) {
        console.log(error);
    }
}

export function* onSetSelectedShippingAddressIdSagaTask(id) {
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
                    result = yield call(editCartCall, {
                        ...currentCart,
                        id_address_delivery: id,
                        id_address_invoice: id
                    });
                } else result = yield call(createCartCall, currentCart);
                if (result && result.cart) {
                    let cart = result.cart;
                    if (!cart.associations) {
                        cart = {
                            ...cart,
                            id_address_delivery: id,
                            id_address_invoice: id,
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
