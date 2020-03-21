import { REDUCER_NAME_SEARCH } from './../../../constants/StoreConstants';

export default function getSearchSelectedCategoryIdSelector(state) {
    return state[REDUCER_NAME_SEARCH].selectedCategoryId;
}
