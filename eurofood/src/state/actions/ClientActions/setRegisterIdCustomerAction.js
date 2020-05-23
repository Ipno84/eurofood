import { SET_REGISTER_ID_CUSTOMER } from '../../../constants/ClientConstants';

export default function setRegisterIdCustomerAction(id_customer) {
    return { type: SET_REGISTER_ID_CUSTOMER, id_customer };
}
