import createCachedSelector from 're-reselect';
import fixPrice from '../../../helpers/fixPrice';
import getProductItemSelector from './getProductItemSelector';

export default createCachedSelector(
    [getProductItemSelector, (_, id) => id],
    (product, id) => {
        if (typeof product?.tax_rate !== 'undefined') {
            const formattedTaxRate = parseFloat(product.tax_rate);
            if (!isNaN(formattedTaxRate)) return formattedTaxRate / 100;
        }
        let taxPercentage = 0;
        if (product) {
            let price = product.price;
            let priceTaxExcluded = product.price_tax_exc;
            if (price) price = parseFloat(price);
            if (priceTaxExcluded)
                priceTaxExcluded = parseFloat(priceTaxExcluded);
            if (
                price &&
                priceTaxExcluded &&
                !isNaN(price) &&
                !isNaN(priceTaxExcluded)
            ) {
                taxPercentage = price / priceTaxExcluded - 1;
            }
            let priceWithoutReduction = product.price_without_reduction;
            let priceWithoutReductionWithoutTax =
                product.price_without_reduction_without_tax;

            if (priceWithoutReduction)
                priceWithoutReduction = parseFloat(priceWithoutReduction);
            if (priceWithoutReductionWithoutTax)
                priceWithoutReductionWithoutTax = parseFloat(
                    priceWithoutReductionWithoutTax
                );
            if (
                priceWithoutReduction &&
                priceWithoutReductionWithoutTax &&
                !isNaN(priceWithoutReduction) &&
                !isNaN(priceWithoutReductionWithoutTax)
            ) {
                taxPercentage =
                    priceWithoutReduction / priceWithoutReductionWithoutTax - 1;
            }
        }
        if (!isNaN(taxPercentage)) {
            taxPercentage = parseFloat(fixPrice(taxPercentage, true, 2));
        }
        return taxPercentage;
    }
)((_, id) => id);
