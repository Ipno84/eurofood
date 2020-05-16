import { SET_HAS_TO_COMPLETE_BUSINESS_REGISTRATION } from '../../../constants/ClientConstants';

export default function setHasToCompleteBusinessRegistrationAction(
    hasToCompleteBusinessRegistration
) {
    return {
        type: SET_HAS_TO_COMPLETE_BUSINESS_REGISTRATION,
        hasToCompleteBusinessRegistration
    };
}
