import createCachedSelector from 're-reselect';
import getOrderItemSelector from './getOrderItemSelector';

export default createCachedSelector(
    [getOrderItemSelector, (_, id) => id],
    orderItem => (orderItem && orderItem.reference ? orderItem.reference : null)
)((_, id) => id);
