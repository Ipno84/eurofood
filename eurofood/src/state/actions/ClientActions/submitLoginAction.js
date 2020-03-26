import { FAILURE, SUCCESS } from '../../../constants/BaseConstants';

import { SUBMIT_LOGIN } from '../../../constants/ClientConstants';

export default function submitLoginAction(payload) {
    if (payload && payload.success && payload.user) {
        return {
            type: SUBMIT_LOGIN + SUCCESS,
            user: payload.user
        };
    } else if (payload && payload.error) {
        return { type: SUBMIT_LOGIN + FAILURE };
    }
    return { type: SUBMIT_LOGIN };
}
