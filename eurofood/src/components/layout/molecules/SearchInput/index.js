import Input from './../../atoms/Input/SearchInput';
import React from 'react';
import SearchIcon from './../../atoms/Icon/SearchIcon';
import Styled from './styled';

const SearchInput = () => {
    return (
        <Styled>
            <SearchIcon />
            <Input placeholder="Cosa stai cercando?" returnKeyType="search" />
        </Styled>
    );
};

export default SearchInput;
