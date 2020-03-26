import createCachedSelector from 're-reselect';
import getCartItemQuantitySelector from './getCartItemQuantitySelector';
import getProductStockQuantitySelector from './../ProductsSelectors/getProductStockQuantitySelector';

export default createCachedSelector(
    [
        getCartItemQuantitySelector,
        getProductStockQuantitySelector,
        (state, id, quantity) => quantity,
        (state, id) => id
    ],
    (cartQuantity, stockQuantity, quantity) =>
        !(quantity + cartQuantity >= stockQuantity)
)((_, id, quantity) => `${id}_${quantity}`);
