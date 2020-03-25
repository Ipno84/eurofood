import styled, { css } from 'styled-components/native';

const BadgeWrapper = styled.View`
    align-self: flex-start;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 8px;
    padding-right: 8px;
    flex-direction: row;
    ${({ isProductAvailable, theme }) =>
        isProductAvailable
            ? css`
                  background-color: ${theme.colors.lightGreen(1)};
              `
            : css`
                  background-color: ${theme.colors.darkRed(0.2)};
              `};
`;

export default BadgeWrapper;
