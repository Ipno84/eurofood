import createCachedSelector from 're-reselect';
import getProductStockQuantitySelector from './getProductStockQuantitySelector';

export default createCachedSelector(
    [getProductStockQuantitySelector, (_, id) => id],
    quantity => Boolean(parseInt(quantity))
)((_, id) => id);
