import styled, { css } from 'styled-components/native';

const ProductPrice = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto(700)};
    ${({ strikedthrough, theme }) =>
        strikedthrough
            ? css`
                  text-decoration: line-through;
                  color: ${theme.colors.gray(1)};
                  padding-top: 3px;
                  padding-left: 5px;
              `
            : css`
                  color: ${theme.colors.darkRed(1)};
                  font-size: 18px;
              `}
`;

export default ProductPrice;
