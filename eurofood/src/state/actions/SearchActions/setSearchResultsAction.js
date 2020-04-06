import { SET_SEARCH_RESULTS } from '../../../constants/SearchConstants';

export default function setSearchResultsAction(results, count) {
    return {
        type: SET_SEARCH_RESULTS,
        results,
        count
    };
}
