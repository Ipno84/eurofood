import { SHOW_SHIPPING_ADDRESS_FORM } from './../../../constants/CartConstants';

export default function showShippingAddressFormAction(show) {
    return {
        type: SHOW_SHIPPING_ADDRESS_FORM,
        show
    };
}
