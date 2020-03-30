import createCachedSelector from 're-reselect';
import getOrderItemRowSelector from './getOrderItemRowSelector';

export default createCachedSelector(
    [getOrderItemRowSelector, (_, id) => id, (_, _, id_product) => id_product],
    orderItem =>
        orderItem && orderItem.product_name ? orderItem.product_name : ''
)((_, id) => id);
