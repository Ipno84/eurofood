import { SET_ADDRESS_KEY_VALUE } from '../../../constants/AddressConstants';

export default function setAddressFormKeyAction(key, value) {
    return { type: SET_ADDRESS_KEY_VALUE, key, value };
}
