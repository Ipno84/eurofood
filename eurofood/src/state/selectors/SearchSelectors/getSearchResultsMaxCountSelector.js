import { REDUCER_NAME_SEARCH } from './../../../constants/StoreConstants';

export default function getSearchResultsMaxCountSelector(state) {
    return state[REDUCER_NAME_SEARCH].count;
}
