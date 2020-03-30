import { createSelector } from 'reselect';
import getCurrentCartAssociationsCartRowsSelector from './getCurrentCartAssociationsCartRowsSelector';
import getProductItemFinalUnitPriceSelector from './../ProductsSelectors/getProductItemFinalUnitPriceSelector';

export default createSelector(
    [getCurrentCartAssociationsCartRowsSelector, state => state],
    (cartItems, state) => {
        if (!cartItems) return 0;
        return cartItems.reduce((total, cartItem) => {
            const productUnitPrice = getProductItemFinalUnitPriceSelector(
                state,
                cartItem.id_product
            );
            return (
                parseInt(total) +
                parseInt(cartItem.quantity) * parseFloat(productUnitPrice)
            );
        }, 0);
    }
);
