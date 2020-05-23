import { REDUCER_NAME_CLIENT } from '../../../constants/StoreConstants';

export default function getHasToCompleteBusinessRegistrationSelector(state) {
    return state[REDUCER_NAME_CLIENT].hasToCompleteBusinessRegistration;
}
