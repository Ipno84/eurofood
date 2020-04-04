import createCachedSelector from 're-reselect';
import getProductItemSelector from './getProductItemSelector';

export default createCachedSelector(
    [getProductItemSelector, (_, id) => id],
    product => {
        if (!product) return '';
        return product.description_short
            .replace(/<\/?[^>]+(>|$)/g, '')
            .replace(/\r?\n|\r/g, ' ');
    }
)((_, id) => id);
