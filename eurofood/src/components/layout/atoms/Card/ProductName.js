import styled from 'styled-components/native';

const ProductName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto(700)};
    font-size: 14px;
    text-transform: uppercase;
    text-align: center;
`;

export default ProductName;
