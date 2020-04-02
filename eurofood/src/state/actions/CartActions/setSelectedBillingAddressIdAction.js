import { SET_SELECTED_BILLING_ADDRESS_ID } from './../../../constants/CartConstants';

export default function setSelectedBillingAddressIdAction(id) {
    return {
        type: SET_SELECTED_BILLING_ADDRESS_ID,
        id
    };
}
