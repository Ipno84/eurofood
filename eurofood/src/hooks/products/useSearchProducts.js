import { useDispatch, useSelector } from 'react-redux';

import getSearchResultsAction from './../../state/actions/SearchActions/getSearchResultsAction';
import getSearchResultsCountSelector from './../../state/selectors/SearchSelectors/getSearchResultsCountSelector';
import getSearchResultsIdsSelector from './../../state/selectors/SearchSelectors/getSearchResultsIdsSelector';
import { useCallback } from 'react';
import usePrevious from './../../hooks/usePrevious';

export default function useSearchProducts() {
    const dispatch = useDispatch();
    const searchResults = useSelector(state =>
        getSearchResultsIdsSelector(state)
    );
    console.log(searchResults);
    const searchResultsCount = useSelector(state =>
        getSearchResultsCountSelector(state)
    );
    const previousSearchResultsCount = usePrevious(searchResultsCount);
    const getSearchResults = useCallback(params =>
        dispatch(getSearchResultsAction(params))
    );
    onSearchReachEnd = () => {
        console.log('REACHED', previousSearchResultsCount, searchResultsCount);
        // if (previousSearchResultsCount !== searchResultsCount) {
        //     getSearchResults({ offset: searchResultsCount });
        // }
    };
    return {
        searchResults,
        onSearchReachEnd
    };
}
