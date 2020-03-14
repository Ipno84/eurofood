import styled from 'styled-components/native';

const SearchInput = styled.View`
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.orange(1)};
    background-color: ${({ theme }) => theme.colors.white(0)};
    height: 32px;
    flex-direction: row;
`;

export default SearchInput;
