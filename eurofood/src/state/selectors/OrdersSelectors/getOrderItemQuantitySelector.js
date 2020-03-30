import createCachedSelector from 're-reselect';
import getOrderItemRowSelector from './getOrderItemRowSelector';

export default createCachedSelector(
    [getOrderItemRowSelector, (_, id) => id, (_, _, id_product) => id_product],
    orderItem =>
        orderItem && orderItem.product_quantity
            ? orderItem.product_quantity
            : ''
)((_, id) => id);
