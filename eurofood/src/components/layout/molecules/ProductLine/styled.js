import styled, { css } from 'styled-components/native';

const ProductLine = styled.View`
    height: 150px;
    flex-direction: row;
    ${({ odd, theme }) =>
        !odd &&
        css`
            background-color: ${theme.colors.lightGray(1)};
        `}
`;

export default ProductLine;
