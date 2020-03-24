import { REDUCER_NAME_SEARCH } from './../../../constants/StoreConstants';

export default function isSearchingSelector(state) {
    return state[REDUCER_NAME_SEARCH].isSearching;
}
