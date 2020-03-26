import styled from 'styled-components/native';

const Text = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto(300, true, false)};
`;

export default Text;
