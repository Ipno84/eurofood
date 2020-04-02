import { FAILURE, SUCCESS } from '../../../constants/BaseConstants';

import { SUBMIT_ADDRESS } from '../../../constants/AddressConstants';

export default function submitAddressAction(payload) {
    if (payload && payload.success && payload.address) {
        return {
            type: SUBMIT_ADDRESS + SUCCESS,
            address: payload.address
        };
    } else if (payload && payload.error) {
        return { type: SUBMIT_ADDRESS + FAILURE };
    }
    return { type: SUBMIT_ADDRESS };
}
