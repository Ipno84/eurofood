import createCachedSelector from 're-reselect';
import getProductsItemsSelector from './getProductsItemsSelector';

export default createCachedSelector(
    [getProductsItemsSelector, (_, id) => id],
    (products, id) => (products && products[id] ? products[id] : null)
)((_, id) => id);
