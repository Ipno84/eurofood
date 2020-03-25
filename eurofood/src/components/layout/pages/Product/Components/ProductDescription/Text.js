import styled from 'styled-components/native';

const Text = styled.Text`
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.roboto(100)};
`;

export default Text;
