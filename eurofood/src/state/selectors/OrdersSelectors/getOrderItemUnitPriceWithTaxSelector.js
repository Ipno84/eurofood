import createCachedSelector from 're-reselect';
import getOrderItemRowSelector from './getOrderItemRowSelector';

export default createCachedSelector(
    [getOrderItemRowSelector, (_, id) => id, (_, _, id_product) => id_product],
    orderItem =>
        orderItem && orderItem.unit_price_tax_incl
            ? orderItem.unit_price_tax_incl
            : ''
)((_, id) => id);
