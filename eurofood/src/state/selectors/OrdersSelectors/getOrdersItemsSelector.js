import { REDUCER_NAME_ORDERS } from '../../../constants/StoreConstants';

export default function getOrdersItemsSelector(state) {
    return state[REDUCER_NAME_ORDERS].items;
}
