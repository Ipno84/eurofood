import styled, { css } from 'styled-components/native';

const Text = styled.Text`
    flex: 1;
    font-size: 18px;
    ${({ darkOrange, theme }) =>
        darkOrange &&
        css`
            color: ${theme.colors.darkOrange(1)};
        `}
`;

export default Text;
