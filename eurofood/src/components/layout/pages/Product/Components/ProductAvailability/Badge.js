import styled, { css } from 'styled-components/native';

const Badge = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto(700)};
    ${({ isProductAvailable, theme }) =>
        isProductAvailable
            ? css`
                  color: ${theme.colors.green(1)};
              `
            : css`
                  color: ${theme.colors.red(1)};
              `}
`;

export default Badge;
