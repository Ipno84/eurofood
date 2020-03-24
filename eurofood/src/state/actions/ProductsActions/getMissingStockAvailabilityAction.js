import { GET_MISSING_STOCK_AVAILABILITY } from '../../../constants/ProductsConstants';

export default function getMissingStockAvailabilityAction(ids) {
    return {
        type: GET_MISSING_STOCK_AVAILABILITY,
        ids
    };
}
