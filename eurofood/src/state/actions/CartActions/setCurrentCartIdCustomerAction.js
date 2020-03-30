import { SET_CURRENT_CART_ID_CUSTOMER } from './../../../constants/CartConstants';

export default function setCurrentCartIdCustomerAction(id_customer) {
    return {
        type: SET_CURRENT_CART_ID_CUSTOMER,
        id_customer
    };
}
