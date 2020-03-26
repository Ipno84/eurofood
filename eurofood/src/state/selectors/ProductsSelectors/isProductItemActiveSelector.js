import createCachedSelector from 're-reselect';
import getProductItemSelector from './getProductItemSelector';

export default createCachedSelector(
    [getProductItemSelector, (_, id) => id],
    product => {
        return Boolean(
            product && product.active && parseInt(product.active) === 1
        );
    }
)((_, id) => id);
