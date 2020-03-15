import Input from './';
import styled from 'styled-components/native';

const SearchInput = styled(Input)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.white(1)};
    color: ${({ theme }) => theme.colors.alterGray(1)};
    font-size: 19px;
`;

export default SearchInput;
