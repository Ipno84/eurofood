import CategorySelector from '../../molecules/CategorySelector';
import React from 'react';
import SearchContainer from '../../atoms/Container/SearchContainer';
import SearchInput from '../../molecules/SearchInput';

const SearchSection = () => {
    return (
        <SearchContainer>
            <SearchInput />
            <CategorySelector />
        </SearchContainer>
    );
};

export default SearchSection;
