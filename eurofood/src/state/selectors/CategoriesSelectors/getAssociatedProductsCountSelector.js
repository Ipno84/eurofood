import createCachedSelector from 're-reselect';
import getAssociatedProductsIdsSelector from './getAssociatedProductsIdsSelector';

export default createCachedSelector(
    [getAssociatedProductsIdsSelector, (_, id) => id],
    products => (products ? products.length : 0)
)((_, id) => id);
