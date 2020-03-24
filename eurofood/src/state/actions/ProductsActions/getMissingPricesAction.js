import { GET_MISSING_PRICES } from '../../../constants/ProductsConstants';

export default function getMissingPricesAction(ids) {
    return {
        type: GET_MISSING_PRICES,
        ids
    };
}
