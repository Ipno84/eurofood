import CategorySelector from '../../molecules/CategorySelector';
import React from 'react';
import SearchContainer from '../../atoms/Container/SearchContainer';
import SearchInput from '../../molecules/SearchInput';
import styled from 'styled-components/native';

const SearchSection = () => {
    return (
        <SearchContainer>
            <Bg />
            <SearchInput />
        </SearchContainer>
    );
};

export default SearchSection;

const Bg = styled.View`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 16px;
    background-color: ${({ theme }) => theme.colors.lightGray(1)};
`;
