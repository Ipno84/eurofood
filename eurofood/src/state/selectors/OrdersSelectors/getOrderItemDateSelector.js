import createCachedSelector from 're-reselect';
import getOrderItemSelector from './getOrderItemSelector';

export default createCachedSelector(
    [getOrderItemSelector, (_, id) => id],
    orderItem => (orderItem && orderItem.date_add ? orderItem.date_add : null)
)((_, id) => id);
