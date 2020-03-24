import createCachedSelector from 're-reselect';
import getProductsSpecificPricesSelector from './getProductsSpecificPricesSelector';

export default createCachedSelector(
    [getProductsSpecificPricesSelector, (_, id) => id],
    (specificPrices, id) =>
        specificPrices && specificPrices[id] ? specificPrices[id] : null
)((_, id) => id);
