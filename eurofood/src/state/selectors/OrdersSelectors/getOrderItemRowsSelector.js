import createCachedSelector from 're-reselect';
import getOrderItemSelector from './getOrderItemSelector';

export default createCachedSelector(
    [getOrderItemSelector, (_, id) => id],
    orderItem =>
        orderItem && orderItem.associations && orderItem.associations.order_rows
            ? orderItem.associations.order_rows
            : null
)((_, id) => id);
