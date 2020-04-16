import createCachedSelector from 're-reselect';
import getProductsStockAvailabilitiesSelector from './getProductsStockAvailabilitiesSelector';

export default createCachedSelector(
    [getProductsStockAvailabilitiesSelector, (_, id) => id],
    (stockAvailabilities, id) => {
        return stockAvailabilities && stockAvailabilities[id]
            ? stockAvailabilities[id]
            : null;
    }
)((_, id) => id);
