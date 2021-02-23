import createCachedSelector from 're-reselect';
import fixPrice from '../../../helpers/fixPrice';
import getProductItemSelector from './getProductItemSelector';

export default createCachedSelector(
    [getProductItemSelector, (_, id) => id],
    product => {
        let taxPercentage = 0;
        if (product) {
            if (product.price && product.price_tax_exc) {
                taxPercentage = product.price / product.price_tax_exc - 1;
            }
            if (
                product.price_without_reduction &&
                product.price_without_reduction_without_tax
            ) {
                taxPercentage =
                    product.price_without_reduction /
                        product.price_without_reduction_without_tax -
                    1;
            }
        }
        if (!isNaN(taxPercentage)) {
            taxPercentage = parseFloat(fixPrice(taxPercentage, true, 2));
        }
        return taxPercentage;
    }
)((_, id) => id);
