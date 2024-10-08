import styled from 'styled-components/native';

const SearchInput = styled.View`
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.orange(1)};
    background-color: ${({ theme }) => theme.colors.white(1)};
    height: 48px;
    flex-direction: row;
    margin-right: 8px;
    flex: 1;
`;

export default SearchInput;
