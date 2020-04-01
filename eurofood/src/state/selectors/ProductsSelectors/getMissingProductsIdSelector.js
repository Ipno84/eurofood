import { REDUCER_NAME_PRODUCTS } from '../../../constants/StoreConstants';

export default function getMissingProductsIdSelector(state) {
    return state[REDUCER_NAME_PRODUCTS].missingProductsId;
}
