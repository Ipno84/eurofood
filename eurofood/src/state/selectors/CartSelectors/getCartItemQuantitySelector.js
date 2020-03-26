import createCachedSelector from 're-reselect';
import getCartItemsSelector from './getCartItemsSelector';

export default createCachedSelector(
    [getCartItemsSelector, (_, id) => id],
    (cartItems, id) => (cartItems && cartItems[id] ? cartItems[id] : null)
)((_, id) => id);
