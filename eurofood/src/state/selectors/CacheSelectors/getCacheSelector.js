import { REDUCER_NAME_CACHE } from '../../../constants/StoreConstants';

export default function getCacheSelector(state) {
    return state[REDUCER_NAME_CACHE].cache;
}
