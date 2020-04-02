import { call, put, select } from 'redux-saga/effects';

import NavigatorRef from './../../../../../helpers/NavigatorRef';
import { ROUTE_NAME_CART } from '../../../../../constants/RouteConstants';
import { StackActions } from '@react-navigation/native';
import createCartCall from './../../../../../api/calls/CartCalls/createCartCall';
import editCartCall from './../../../../../api/calls/CartCalls/editCartCall';
import getCartCall from './../../../../../api/calls/CartCalls/getCartCall';
import getCurrentCartIdSelector from './../../../../selectors/CartSelectors/getCurrentCartIdSelector';
import getOrderItemIdCartSelector from './../../../../selectors/OrdersSelectors/getOrderItemIdCartSelector';
import isUserLoggedInSelector from './../../../../selectors/ClientSelectors/isUserLoggedInSelector';
import setCurrentCartAction from './../../../../actions/CartActions/setCurrentCartAction';

export default function* backorderSaga({ id }) {
    try {
        const isUserLoggedIn = yield select(state =>
            isUserLoggedInSelector(state)
        );
        if (isUserLoggedIn) {
            const orderItemIdCart = yield select(
                getOrderItemIdCartSelector,
                id
            );
            if (orderItemIdCart) {
                const remoteCart = yield call(getCartCall, orderItemIdCart);
                if (remoteCart && remoteCart.cart) {
                    const currentCartId = yield select(state =>
                        getCurrentCartIdSelector(state)
                    );
                    const { id, ...newCart } = remoteCart.cart;
                    if (currentCartId) {
                        result = yield call(editCartCall, {
                            ...newCart,
                            id: currentCartId
                        });
                    } else {
                        result = yield call(createCartCall, newCart);
                    }
                    if (result && result.cart) {
                        const navRef = new NavigatorRef();
                        navRef.navigation.dispatch(
                            StackActions.push(ROUTE_NAME_CART)
                        );
                        yield put(setCurrentCartAction(result.cart));
                    }
                }
            }
        }
    } catch (error) {
        console.log(error);
        // yield put(addToCartAction({ error: true }));
    }
}
