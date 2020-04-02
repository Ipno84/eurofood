import createCachedSelector from 're-reselect';
import getCurrentCartItemQuantitySelector from './getCurrentCartItemQuantitySelector';
import getProductStockQuantitySelector from './../ProductsSelectors/getProductStockQuantitySelector';

export default createCachedSelector(
    [
        getCurrentCartItemQuantitySelector,
        getProductStockQuantitySelector,
        (_, id) => id
    ],
    (cartItemQuantity, productStockQuantity) =>
        cartItemQuantity > productStockQuantity
)((_, id) => id);
