import createCachedSelector from 're-reselect';
import fixPrice from './../../../helpers/fixPrice';
import getCurrentCartItemQuantitySelector from './../CartSelectors/getCurrentCartItemQuantitySelector';
import getProductItemFinalUnitPriceSelector from './getProductItemFinalUnitPriceSelector';

export default createCachedSelector(
    [
        getProductItemFinalUnitPriceSelector,
        getCurrentCartItemQuantitySelector,
        (_, id) => id
    ],
    (finalPrice, quantity) => fixPrice(finalPrice * quantity, true, 2)
)((_, id) => id);
