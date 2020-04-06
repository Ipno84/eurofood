import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from './../../atoms/Input/SearchInput';
import { ROUTE_NAME_SEARCH_RESULTS } from '../../../../constants/RouteConstants';
import SearchIcon from './../../atoms/Icon/SearchIcon';
import Styled from './styled';
import getSearchResultsAction from './../../../../state/actions/SearchActions/getSearchResultsAction';
import getSearchTextSelector from './../../../../state/selectors/SearchSelectors/getSearchTextSelector';
import setSearchTextAction from './../../../../state/actions/SearchActions/setSearchTextAction';
import useAppNavigation from '../../../../hooks/navigation/useAppNavigation';

const SearchInput = () => {
    const { navigate } = useAppNavigation();
    const dispatch = useDispatch();
    const searchText = useSelector(state => getSearchTextSelector(state));
    const setSearchText = useCallback(
        text => dispatch(setSearchTextAction(text)),
        [dispatch]
    );
    const getSearchResults = useCallback(
        () => dispatch(getSearchResultsAction()),
        [dispatch]
    );
    return (
        <Styled>
            <SearchIcon />
            <Input
                value={searchText}
                onChange={e => setSearchText(e.nativeEvent.text)}
                placeholder="Cosa stai cercando?"
                returnKeyType="search"
                blurOnSubmit={true}
                onSubmitEditing={() => {
                    if (searchText) {
                        getSearchResults();
                        navigate(ROUTE_NAME_SEARCH_RESULTS);
                    }
                }}
            />
        </Styled>
    );
};

export default SearchInput;
