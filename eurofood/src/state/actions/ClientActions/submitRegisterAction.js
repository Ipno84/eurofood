import { FAILURE, SUCCESS } from '../../../constants/BaseConstants';

import { SUBMIT_REGISTER } from '../../../constants/ClientConstants';

export default function submitRegisterAction(payload) {
    if (payload && payload.success) {
        return {
            type: SUBMIT_REGISTER + SUCCESS
        };
    } else if (payload && payload.error) {
        return { type: SUBMIT_REGISTER + FAILURE };
    }
    return { type: SUBMIT_REGISTER };
}
