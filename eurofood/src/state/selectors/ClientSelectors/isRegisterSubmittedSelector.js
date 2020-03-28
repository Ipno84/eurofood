import { REDUCER_NAME_CLIENT } from '../../../constants/StoreConstants';

export default function isRegisterSubmittedSelector(state) {
    return state[REDUCER_NAME_CLIENT].registerSubmitted;
}
