import { REDUCER_NAME_SEARCH } from './../../../constants/StoreConstants';

export default function getSearchTextSelector(state) {
    return state[REDUCER_NAME_SEARCH].searchText;
}
