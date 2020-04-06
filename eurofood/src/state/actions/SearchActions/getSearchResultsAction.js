import { FAILURE, SUCCESS } from '../../../constants/BaseConstants';

import { GET_SEARCH_RESULTS } from '../../../constants/SearchConstants';

export default function getSearchResultsAction(payload) {
    const minTime = (payload && payload.minTime) || 0;
    const limit = (payload && payload.limit) || 10;
    const offset = (payload && payload.offset) || undefined;
    const ids = payload && payload.ids ? payload.ids : undefined;
    const error = payload && payload.error ? payload.error : undefined;
    const count = payload && payload.count ? payload.count : 0;
    const success = payload && payload.success;
    if (success && ids) {
        return {
            type: GET_SEARCH_RESULTS + SUCCESS,
            ids,
            count
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
