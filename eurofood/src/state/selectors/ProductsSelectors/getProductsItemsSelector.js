import { REDUCER_NAME_PRODUCTS } from '../../../constants/StoreConstants';

export default function getProductsItemsSelector(state) {
    return state[REDUCER_NAME_PRODUCTS].items;
}
