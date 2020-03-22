import { GET_MISSING_PRODUCTS } from '../../../constants/ProductsConstants';

export default function getMissingProductsAction(ids) {
    return {
        type: GET_MISSING_PRODUCTS,
        ids
    };
}
