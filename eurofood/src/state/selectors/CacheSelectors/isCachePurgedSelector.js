import { REDUCER_NAME_CACHE } from '../../../constants/StoreConstants';

export default function isCachePurgedSelector(state) {
    return state[REDUCER_NAME_CACHE].isCachePurged;
}
