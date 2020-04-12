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
    (productsIds, items, id, count) => {
        if (productsIds) {
            const products = productsIds.map(e =>
                items && items[e] ? items[e] : e
            );
            return products;
        }
        return null;
    }
)((state, id, count) => `${id}_${count}`);
