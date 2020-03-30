import createCachedSelector from 're-reselect';
import getOrdersItemsSelector from './getOrdersItemsSelector';

export default createCachedSelector(
    [getOrdersItemsSelector, (_, id) => id],
    (orders, id) => (orders && orders[id] ? orders[id] : null)
)((_, id) => id);
