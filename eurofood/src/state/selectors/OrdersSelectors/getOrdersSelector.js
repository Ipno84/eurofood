import { REDUCER_NAME_ORDERS } from '../../../constants/StoreConstants';

export default function getOrdersSelector(state) {
    return state[REDUCER_NAME_ORDERS].orders;
}
