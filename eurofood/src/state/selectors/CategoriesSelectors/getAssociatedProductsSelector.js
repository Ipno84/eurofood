import createCachedSelector from 're-reselect';
import getAssociatedProductsIdsSelector from './getAssociatedProductsIdsSelector';
import getProductsItemsSelector from './../ProductsSelectors/getProductsItemsSelector';

export default createCachedSelector(
    [
        getAssociatedProductsIdsSelector,
        getProductsItemsSelector,
        (state, id) => id,
        (state, id, count = 0) => count
    ],
    (productsIds, items) => {
        if (productsIds) {
            return productsIds.map(e => (items && items[e] ? items[e] : e));
        }
        return null;
    }
)((state, id, count) => `${id}_${count}`);
