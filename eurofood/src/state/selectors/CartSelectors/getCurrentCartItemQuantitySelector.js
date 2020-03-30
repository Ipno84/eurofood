import createCachedSelector from 're-reselect';
import getCurrentCartItemSelector from './getCurrentCartItemSelector';

export default createCachedSelector(
    [getCurrentCartItemSelector, (_, id) => id],
    (cartItem, id) =>
        cartItem && cartItem.quantity ? parseInt(cartItem.quantity) : 0
)((_, id) => id);
