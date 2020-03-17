import styled, { css } from 'styled-components/native';

const Text = styled.Text`
    color: ${({ theme }) => theme.colors.gray(1)};
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.roboto(400, false, true)};
    font-size: 14px;
    line-height: 18px;
    ${({ isFirst }) =>
        isFirst &&
        css`
            margin-top: 8px;
        `}
`;

export default Text;
