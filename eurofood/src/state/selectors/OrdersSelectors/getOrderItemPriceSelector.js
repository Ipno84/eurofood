import createCachedSelector from 're-reselect';
import getOrderItemRowSelector from './getOrderItemRowSelector';

export default createCachedSelector(
    [getOrderItemRowSelector, (_, id) => id, (_, _, id_product) => id_product],
    orderItem =>
        orderItem && orderItem.product_price ? orderItem.product_price : ''
)((_, id) => id);
