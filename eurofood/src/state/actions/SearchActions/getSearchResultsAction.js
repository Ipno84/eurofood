import { FAILURE, SUCCESS } from '../../../constants/BaseConstants';

import { GET_SEARCH_RESULTS } from '../../../constants/SearchConstants';

export default function getSearchResultsAction({
    minTime = 0,
    limit = 10,
    offset = undefined,
    ids,
    error
}) {
    if (ids) {
        return {
            type: GET_SEARCH_RESULTS + SUCCESS,
            ids
        };
    } else if (error) {
        return {
            type: GET_SEARCH_RESULTS + FAILURE
        };
    }
    return {
        type: GET_SEARCH_RESULTS,
        minTime,
        limit,
        offset
    };
}
