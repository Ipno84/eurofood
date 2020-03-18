import Input from './';
import styled from 'styled-components/native';

const SearchInput = styled(Input)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.white(1)};
    color: ${({ theme }) => theme.colors.dark(1)};
    font-family: ${({ theme }) => theme.fonts.roboto(400, false, true)};
    font-size: 16px;
`;

export default SearchInput;
