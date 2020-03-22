import createCachedSelector from 're-reselect';
import getAssociatedProductsIdsSelector from './getAssociatedProductsIdsSelector';
import getProductsItemsSelector from './../ProductsSelectors/getProductsItemsSelector';

export default createCachedSelector(
    [getAssociatedProductsIdsSelector, getProductsItemsSelector, (_, id) => id],
    (productsIds, items) => {
        if (productsIds) {
            return productsIds.map(e => (items && items[e] ? items[e] : e));
        }
        return [];
    }
)((_, id) => id);
