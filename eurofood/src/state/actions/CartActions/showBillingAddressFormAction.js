import { SHOW_BILLING_ADDRESS_FORM } from './../../../constants/CartConstants';

export default function showBillingAddressFormAction(show) {
    return {
        type: SHOW_BILLING_ADDRESS_FORM,
        show
    };
}
