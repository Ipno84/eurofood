import styled from 'styled-components/native';

const Input = styled.TextInput`
    font-family: ${({ theme }) => theme.fonts.roboto(400, false, false)};
`;

export default Input;
