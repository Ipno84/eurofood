import { FAILURE, SUCCESS } from '../../../constants/BaseConstants';

import { GET_CARRIERS } from '../../../constants/CarriersConstants';

export default function getCarriersAction(payload, carriers) {
    if (payload && payload.success) {
        return {
            type: GET_CARRIERS + SUCCESS,
            carriers
        };
    } else if (payload && payload.error) {
        return {
            type: GET_CARRIERS + FAILURE,
            error: payload.error
        };
    }
    return {
        type: GET_CARRIERS
    };
}
