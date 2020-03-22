import styled from 'styled-components/native';

const Text = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto(400, false, true)};
    color: ${({ theme }) => theme.colors.dark(1)};
    font-size: 22px;
`;

export default Text;
