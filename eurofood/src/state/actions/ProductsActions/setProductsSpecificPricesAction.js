import { SET_PRODUCTS_SPECIFIC_PRICES } from '../../../constants/ProductsConstants';

export default function setProductsSpecificPricesAction({
    specificPrices,
    force
}) {
    return {
        type: SET_PRODUCTS_SPECIFIC_PRICES,
        specificPrices,
        force
    };
}
