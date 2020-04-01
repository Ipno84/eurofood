import { FAILURE, SUCCESS } from './../../../constants/BaseConstants';

import { GET_USER_ADDRESSES } from './../../../constants/AddressConstants';

export default function getCurrentUserAddressAction(payload) {
    if (payload && payload.success && payload.addresses) {
        return {
            type: GET_USER_ADDRESSES + SUCCESS,
            addresses: payload.addresses
        };
    } else if (payload && payload.error) {
        return {
            type: GET_USER_ADDRESSES + FAILURE,
            error: payload.error
        };
    }
    return {
        type: GET_USER_ADDRESSES
    };
}
