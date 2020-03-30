import createCachedSelector from 're-reselect';
import getOrderItemRowsSelector from './getOrderItemRowsSelector';

export default createCachedSelector(
    [getOrderItemRowsSelector, (_, id) => id, (_, _, id_product) => id_product],
    (orderRows, id, id_product) => {
        if (orderRows && id_product) {
            const orderRow = orderRows.find(
                e => parseInt(e.id_product) === parseInt(id_product)
            );
            if (orderRow) return orderRow;
        }
        return null;
    }
)((_, id, id_product) => `${id}_${id_product}`);
