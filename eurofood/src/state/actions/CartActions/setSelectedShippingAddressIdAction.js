import { SET_SELECTED_SHIPPING_ADDRESS_ID } from './../../../constants/CartConstants';

export default function setSelectedShippingAddressIdAction(id) {
    return {
        type: SET_SELECTED_SHIPPING_ADDRESS_ID,
        id
    };
}
