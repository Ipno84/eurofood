import { SET_SELECTED_PAYMENT_METHOD } from '../../../constants/CheckoutConstants';

export default function setSelectedPaymentMethodIdAction(
    selectedPaymentMethodId
) {
    return {
        type: SET_SELECTED_PAYMENT_METHOD,
        selectedPaymentMethodId
    };
}
