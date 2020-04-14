import { REDUCER_NAME_SEARCH } from './../../../constants/StoreConstants';

export default function getSearchModalVisibilitySelector(state) {
    return state[REDUCER_NAME_SEARCH].searchModalVisibility;
}
