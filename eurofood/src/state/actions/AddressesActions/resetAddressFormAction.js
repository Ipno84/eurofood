import { RESET_ADDRESS_FORM } from '../../../constants/AddressConstants';

export default function resetAddressFormAction(id_customer) {
    return { type: RESET_ADDRESS_FORM, id_customer };
}
