import { SET_ORDERS_ITEMS } from '../../../constants/OrdersConstants';

export default function setOrdersItemsAction({ items, force }) {
    return {
        type: SET_ORDERS_ITEMS,
        items,
        force
    };
}
