import { FAILURE, SUCCESS } from '../../../constants/BaseConstants';

import { SUBMIT_BILLING_ADDRESS } from '../../../constants/ClientConstants';

export default function submitBillingAddressAction(payload) {
    if (payload && payload.success) {
        return {
            type: SUBMIT_BILLING_ADDRESS + SUCCESS
        };
    } else if (payload && payload.error) {
        return { type: SUBMIT_BILLING_ADDRESS + FAILURE };
    }
    return { type: SUBMIT_BILLING_ADDRESS };
}
