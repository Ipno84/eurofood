import styled, { css } from 'styled-components/native';

const TotalsText = styled.Text`
    ${({ red }) =>
        red
            ? css`
                  color: ${({ theme }) => theme.colors.red(1)};
              `
            : css`
                  color: ${({ theme }) => theme.colors.dark(1)};
              `}
    ${({ bold }) =>
        bold &&
        css`
            font-size: 16px;
            font-weight: 700;
        `};
`;

export default TotalsText;
