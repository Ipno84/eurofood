import { REDUCER_NAME_CLIENT } from '../../../constants/StoreConstants';

export default function getLoginFormSelector(state) {
    return state[REDUCER_NAME_CLIENT].loginForm;
}
