import { REDUCER_NAME_CLIENT } from '../../../constants/StoreConstants';

export default function getUserSelector(state) {
    return state[REDUCER_NAME_CLIENT].user;
}
