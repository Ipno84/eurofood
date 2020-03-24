import { REDUCER_NAME_PRODUCTS } from '../../../constants/StoreConstants';

export default function getProductsSpecialPricesSelector(state) {
    return state[REDUCER_NAME_PRODUCTS].specificPrices;
}
