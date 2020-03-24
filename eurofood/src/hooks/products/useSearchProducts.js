import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getSearchResultsAction from './../../state/actions/SearchActions/getSearchResultsAction';
import getSearchResultsCountSelector from './../../state/selectors/SearchSelectors/getSearchResultsCountSelector';
import getSearchResultsSelector from './../../state/selectors/SearchSelectors/getSearchResultsSelector';
import isSearchingSelector from './../../state/selectors/SearchSelectors/isSearchingSelector';
import resetSearchAction from './../../state/actions/SearchActions/resetSearchAction';
import usePrevious from './../../hooks/usePrevious';

export default function useSearchProducts() {
    const dispatch = useDispatch();
    const resetSearch = useCallback(() => dispatch(resetSearchAction()), [
        dispatch
    ]);
    useEffect(() => {
        return () => resetSearch();
    }, [resetSearch]);

    const searchResults = useSelector(state => getSearchResultsSelector(state));
    const searchResultsCount = useSelector(state =>
        getSearchResultsCountSelector(state)
    );
    const isSearching = useSelector(state => isSearchingSelector(state));
    const previousSearchResultsCount = usePrevious(searchResultsCount);
    const getSearchResults = useCallback(params =>
        dispatch(getSearchResultsAction(params))
    );
    onSearchProductsScroll = e => {
        if (isSearching || previousSearchResultsCount === searchResultsCount)
            return;
        const remainingHeight =
            e.nativeEvent.contentOffset.y +
            e.nativeEvent.layoutMeasurement.height;
        const scrollDiff = Math.abs(
            e.nativeEvent.contentSize.height - remainingHeight
        );
        if (scrollDiff < 100) getSearchResults({ offset: searchResultsCount });
    };
    return {
        searchResults,
        onSearchProductsScroll,
        isSearching
    };
}
