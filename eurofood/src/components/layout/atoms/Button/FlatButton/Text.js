import styled, { css } from 'styled-components/native';

const Text = styled.Text`
    flex: 1;
    font-size: 18px;
    line-height: 18px;
    font-family: ${({ theme }) => theme.fonts.roboto(400, false, true)};
    padding-top: 4px;
    ${({ darkOrange, azure, theme }) => {
        if (darkOrange) {
            return css`
                color: ${theme.colors.darkOrange(1)};
            `;
        } else if (azure) {
            return css`
                color: ${theme.colors.azure(1)};
            `;
        }
    }};
`;

export default Text;
