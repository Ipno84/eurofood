import createCachedSelector from 're-reselect';
import fixPrice from './../../../helpers/fixPrice';
import getProductPriceInfoSelector from './getProductPriceInfoSelector';

export default createCachedSelector(
    [getProductPriceInfoSelector, (_, id) => id],
    priceInfo => {
        let price = 0;
        if (priceInfo && priceInfo.sale && priceInfo.sale.price) {
            price = priceInfo.sale.price;
        } else if (priceInfo && priceInfo.regularPrice) {
            price = priceInfo.regularPrice;
        }
        return fixPrice(price, true, 2);
    }
)((_, id) => id);
