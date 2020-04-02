import createCachedSelector from 're-reselect';
import getOrderItemSelector from './getOrderItemSelector';

export default createCachedSelector(
    [getOrderItemSelector, (_, id) => id],
    orderItem => (orderItem && orderItem.id_cart ? orderItem.id_cart : null)
)((_, id) => id);
