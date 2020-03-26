import createCachedSelector from 're-reselect';
import getProductItemSelector from './getProductItemSelector';

export default createCachedSelector(
    [getProductItemSelector, (_, id) => id],
    product => {
        if (!product) return '';
        return product.id_category_default;
    }
)((_, id) => id);
