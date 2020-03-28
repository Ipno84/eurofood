import { REDUCER_NAME_CLIENT } from '../../../constants/StoreConstants';

export default function isLoginSubmittedSelector(state) {
    return state[REDUCER_NAME_CLIENT].loginSubmitted;
}
