import styled, { css } from 'styled-components/native';

const Text = styled.Text`
    font-size: 18px;
    line-height: 18px;
    font-family: ${({ theme }) => theme.fonts.roboto(300)};
    text-align: center;
    padding: 12px;
    padding-top: 16px;
`;

export default Text;
