import { SET_SELECTED_PAYMENT_METHOD } from '../../../constants/OrdersConstants';

export default function setSelectedPaymentMethodAction(selectedPaymentMethod) {
    return {
        type: SET_SELECTED_PAYMENT_METHOD,
        selectedPaymentMethod
    };
}
