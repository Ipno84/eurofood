import styled from 'styled-components/native';

const Text = styled.Text`
    font-size: 18px;
    line-height: 18px;
    font-family: ${({ theme }) => theme.fonts.roboto(400, false, true)};
    padding: 16px;
`;

export default Text;
