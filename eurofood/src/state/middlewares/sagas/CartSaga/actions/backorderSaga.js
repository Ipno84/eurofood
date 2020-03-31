import { call, cancel, delay, fork, put, select } from 'redux-saga/effects';

import NavigatorRef from './../../../../../helpers/NavigatorRef';
import { ROUTE_NAME_CART } from '../../../../../constants/RouteConstants';
import { StackActions } from '@react-navigation/native';
import addToCartAction from './../../../../actions/CartActions/addToCartAction';
import createCartCall from './../../../../../api/calls/CartCalls/createCartCall';
import editCartCall from './../../../../../api/calls/CartCalls/editCartCall';
import getCurrentCartIdSelector from './../../../../selectors/CartSelectors/getCurrentCartIdSelector';
import getCurrentCartItemQuantitySelector from './../../../../selectors/CartSelectors/getCurrentCartItemQuantitySelector';
import getCurrentCartSelector from './../../../../selectors/CartSelectors/getCurrentCartSelector';
import getOrderItemRowsSelector from './../../../../selectors/OrdersSelectors/getOrderItemRowsSelector';
import getProductStockQuantitySelector from './../../../../selectors/ProductsSelectors/getProductStockQuantitySelector';
import isUserLoggedInSelector from './../../../../selectors/ClientSelectors/isUserLoggedInSelector';
import setCurrentCartAction from './../../../../actions/CartActions/setCurrentCartAction';

export default function* backorderSaga({ id }) {
    try {
        const isUserLoggedIn = yield select(state =>
            isUserLoggedInSelector(state)
        );
        if (isUserLoggedIn) {
            let currentCart = yield select(getCurrentCartSelector);
            const orderRows = yield select(state =>
                getOrderItemRowsSelector(state, id)
            );
            const cart_rows = orderRows.map(e => ({
                id_product: parseInt(e.product_id),
                quantity: parseInt(e.product_quantity),
                id_product_attribute: e.product_attribute_id
            }));
            currentCart = {
                ...currentCart,
                associations: {
                    cart_rows
                }
            };
            const currentCartId = yield select(state =>
                getCurrentCartIdSelector(state)
            );
            if (currentCartId) {
                result = yield call(editCartCall, currentCart);
            } else result = yield call(createCartCall, currentCart);
            const navRef = new NavigatorRef();
            navRef.navigation.dispatch(StackActions.push(ROUTE_NAME_CART));
            yield put(setCurrentCartAction(currentCart));
        }
    } catch (error) {
        console.log(error);
        // yield put(addToCartAction({ error: true }));
    }
}
