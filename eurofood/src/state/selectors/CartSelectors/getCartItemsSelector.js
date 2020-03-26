import { REDUCER_NAME_CART } from '../../../constants/StoreConstants';

export default function getCartItemsSelector(state) {
    return state[REDUCER_NAME_CART].cartItems;
}
