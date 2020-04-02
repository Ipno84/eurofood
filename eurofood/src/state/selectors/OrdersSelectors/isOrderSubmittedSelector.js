import { REDUCER_NAME_ORDERS } from '../../../constants/StoreConstants';

export default function isOrderSubmittedSelector(state) {
    return state[REDUCER_NAME_ORDERS].orderSubmitted;
}
