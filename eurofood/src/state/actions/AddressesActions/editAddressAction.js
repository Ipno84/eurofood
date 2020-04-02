import { EDIT_ADDRESS } from '../../../constants/AddressConstants';

export default function editAddressAction(item) {
    return {
        type: EDIT_ADDRESS,
        item
    };
}
