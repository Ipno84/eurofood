import createCachedSelector from 're-reselect';
import getProductStockAvailabilitySelector from './getProductStockAvailabilitySelector';

export default createCachedSelector(
    [getProductStockAvailabilitySelector, (_, id) => id],
    stockAvailability => {
        return stockAvailability && stockAvailability.quantity
            ? parseInt(stockAvailability.quantity)
            : 0;
    }
)((_, id) => id);
