import { REDUCER_NAME_PRODUCTS } from '../../../constants/StoreConstants';

export default function getProductsStockAvailabilitiesSelector(state) {
    return state[REDUCER_NAME_PRODUCTS].stockAvailabilities;
}
