import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from './../../atoms/Input/SearchInput';
import SearchIcon from './../../atoms/Icon/SearchIcon';
import Styled from './styled';
import getSearchTextSelector from './../../../../state/selectors/SearchSelectors/getSearchTextSelector';
import setSearchTextAction from './../../../../state/actions/SearchActions/setSearchTextAction';

const SearchInput = () => {
    const dispatch = useDispatch();
    const searchText = useSelector(state => getSearchTextSelector(state));
    const setSearchText = useCallback(
        text => dispatch(setSearchTextAction(text)),
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
            />
        </Styled>
    );
};

export default SearchInput;
