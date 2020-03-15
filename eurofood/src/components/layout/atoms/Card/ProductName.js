import styled from 'styled-components/native';

const ProductName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto(700)};
    font-size: 16px;
    text-transform: uppercase;
`;

export default ProductName;
