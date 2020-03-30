import { REDUCER_NAME_CART } from '../../../constants/StoreConstants';

export default function getCurrentCartSelector(state) {
    return state[REDUCER_NAME_CART].currentCart;
}
