import { SET_PRODUCTS_STOCK_AVAILABILITIES } from '../../../constants/ProductsConstants';

export default function setProductsStockAvailabilitiesAction({
    stockAvailabilities,
    force
}) {
    return {
        type: SET_PRODUCTS_STOCK_AVAILABILITIES,
        stockAvailabilities,
        force
    };
}
