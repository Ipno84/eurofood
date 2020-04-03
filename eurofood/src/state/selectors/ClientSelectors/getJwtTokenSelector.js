import { REDUCER_NAME_CLIENT } from '../../../constants/StoreConstants';

export default function getJwtTokenSelector(state) {
    return state[REDUCER_NAME_CLIENT].jwt;
}
