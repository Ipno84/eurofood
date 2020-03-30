import createCachedSelector from 're-reselect';
import getOrderItemQuantitySelector from './getOrderItemQuantitySelector';
import getOrderItemUnitPriceWithTaxSelector from './getOrderItemUnitPriceWithTaxSelector';

export default createCachedSelector(
    [
        getOrderItemUnitPriceWithTaxSelector,
        getOrderItemQuantitySelector,
        (_, id) => id,
        (_, _, id_product) => id_product
    ],
    (finalPrice, quantity) => {
        if (finalPrice && quantity) {
            return parseFloat(finalPrice) * parseInt(quantity);
        }
        return 0;
    }
)((_, id) => id);
