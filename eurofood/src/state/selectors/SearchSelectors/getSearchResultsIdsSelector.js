import { REDUCER_NAME_SEARCH } from './../../../constants/StoreConstants';

export default function getSearchResultsIdsSelector(state) {
    return state[REDUCER_NAME_SEARCH].results;
}
