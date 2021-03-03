import { REDUCER_NAME_CART } from '../../../constants/StoreConstants';

export default function isCartLoadingSelector(state) {
    return state[REDUCER_NAME_CART].loading;
}
