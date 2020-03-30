import createCachedSelector from 're-reselect';
import getOrderItemSelector from './getOrderItemSelector';

export default createCachedSelector(
    [getOrderItemSelector, (_, id) => id],
    orderItem =>
        orderItem && orderItem.current_state ? orderItem.current_state : null
)((_, id) => id);
