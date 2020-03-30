import { createSelector } from 'reselect';
import getCurrentCartAssociationsCartRowsSelector from './getCurrentCartAssociationsCartRowsSelector';

export default createSelector(
    [getCurrentCartAssociationsCartRowsSelector],
    cartItems => {
        if (!cartItems) return 0;
        return cartItems.reduce((total, cartItem) => {
            return parseInt(total) + parseInt(cartItem.quantity);
        }, 0);
    }
);
