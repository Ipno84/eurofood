import createCachedSelector from 're-reselect';
import getCurrentCartItemQuantitySelector from './getCurrentCartItemQuantitySelector';
import getProductStockQuantitySelector from './../ProductsSelectors/getProductStockQuantitySelector';

export default createCachedSelector(
    [
        getCurrentCartItemQuantitySelector,
        getProductStockQuantitySelector,
        (state, id, quantity) => quantity,
        (state, id) => id
    ],
    (cartQuantity, stockQuantity, quantity) =>
        !(quantity + cartQuantity > stockQuantity)
)((_, id, quantity) => `${id}_${quantity}`);
