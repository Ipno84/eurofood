import { put, select } from 'redux-saga/effects';

import addToCartAction from './../../../../actions/CartActions/addToCartAction';
import getCartItemQuantitySelector from './../../../../selectors/CartSelectors/getCartItemQuantitySelector';
import getProductStockQuantitySelector from './../../../../selectors/ProductsSelectors/getProductStockQuantitySelector';

export default function* onAddToCardSaga({ id, quantity }) {
    try {
        const stockQuantity = yield select(state =>
            getProductStockQuantitySelector(state, id)
        );
        const cartQuantity = yield select(state =>
            getCartItemQuantitySelector(state, id)
        );
        if (
            cartQuantity === null &&
            stockQuantity &&
            quantity <= stockQuantity
        ) {
            yield put(addToCartAction({ id, quantity, success: true }));
        } else if (
            cartQuantity &&
            stockQuantity &&
            cartQuantity + quantity <= stockQuantity
        ) {
            yield put(
                addToCartAction({
                    id,
                    quantity: cartQuantity + quantity,
                    success: true
                })
            );
        }
    } catch (error) {
        yield put(addToCartAction({ error: true }));
    }
}
