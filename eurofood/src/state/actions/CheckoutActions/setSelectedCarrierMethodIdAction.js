import { SET_SELECTED_CARRIER_METHOD } from '../../../constants/CheckoutConstants';

export default function setSelectedCarrierMethodIdAction(
    selectedCarrierMethodId
) {
    return {
        type: SET_SELECTED_CARRIER_METHOD,
        selectedCarrierMethodId
    };
}
