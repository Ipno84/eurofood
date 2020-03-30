import { createSelector } from 'reselect';
import getOrdersItemsSelector from './getOrdersItemsSelector';
import getOrdersSelector from './getOrdersSelector';

export default createSelector(
    [getOrdersSelector, getOrdersItemsSelector],
    (orders, items) => {
        if (orders) {
            return orders.map(e => {
                if (items && items[e]) return items[e];
                return e;
            });
        }
        return [];
    }
);
