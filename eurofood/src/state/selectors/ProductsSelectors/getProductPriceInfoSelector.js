import createCachedSelector from 're-reselect';
import fixPrice from '../../../helpers/fixPrice';
import getProductItemPriceSelector from './getProductItemPriceSelector';
import getProductItemPriceTaxPercentageSelector from './getProductItemPriceTaxPercentageSelector';
import getProductItemWholesalePriceSelector from './getProductItemWholesalePriceSelector';
import getProductSpecificPriceSelector from './getProductSpecificPriceSelector';

export default createCachedSelector(
    [
        getProductItemPriceSelector,
        getProductItemPriceTaxPercentageSelector,
        getProductItemWholesalePriceSelector,
        getProductSpecificPriceSelector,
        (_, id) => id
    ],
    (regularPrice, taxPercentage, wholesalePrice, specificPrice) => {
        if (specificPrice && specificPrice.reduction_type === 'percentage') {
            const reduction = fixPrice(specificPrice.reduction * 100, true, 2);
            const percentage = parseFloat(100 - reduction);
            const price = fixPrice((regularPrice * percentage) / 100, true, 2);
            return {
                regularPrice,
                wholesalePrice,
                taxPercentage,
                sale: {
                    reduction,
                    price
                }
            };
        }
        return {
            regularPrice,
            wholesalePrice
        };
    }
)((_, id) => id);
