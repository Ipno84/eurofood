import styled from 'styled-components/native';

const ProductName = styled.Text`
    font-size: 22px;
    line-height: 22px;
    font-family: ${({ theme }) => theme.fonts.roboto(700, false, true)};
    color: ${({ theme }) => theme.colors.dark(1)};
`;

export default ProductName;
