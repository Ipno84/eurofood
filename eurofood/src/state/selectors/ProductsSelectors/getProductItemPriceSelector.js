import createCachedSelector from 're-reselect';
import fixPrice from '../../../helpers/fixPrice';
import getProductItemSelector from './getProductItemSelector';

export default createCachedSelector(
    [getProductItemSelector, (_, id) => id],
    product => {
        if (!product) return 0;
        let price = product.price;
        return fixPrice(price, true, 2);
    }
)((_, id) => id);
