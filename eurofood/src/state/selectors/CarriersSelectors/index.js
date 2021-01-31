import { REDUCER_NAME_CARRIERS } from '../../../constants/StoreConstants';

export default function getCarriersReducerSelector(state) {
    return state[REDUCER_NAME_CARRIERS];
}
