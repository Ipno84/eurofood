import { FAILURE, SUCCESS } from '../../../constants/BaseConstants';

import { DELETE_ADDRESS } from '../../../constants/AddressConstants';

export default function deleteAddressAction(payload) {
    if (payload && payload.id && payload.success) {
        return {
            type: DELETE_ADDRESS + SUCCESS,
            id: payload.id
        };
    } else if (payload && payload.error) {
        return {
            type: DELETE_ADDRESS + FAILURE,
            error: payload.error
        };
    }
    return {
        type: DELETE_ADDRESS,
        id: payload.id
    };
}
