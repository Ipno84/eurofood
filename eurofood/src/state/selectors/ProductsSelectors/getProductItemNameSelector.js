import createCachedSelector from 're-reselect';
import getProductItemSelector from './getProductItemSelector';

export default createCachedSelector(
    [getProductItemSelector, (_, id) => id],
    product => {
        if (!product) return '';
        return product.name;
    }
)((_, id) => id);
