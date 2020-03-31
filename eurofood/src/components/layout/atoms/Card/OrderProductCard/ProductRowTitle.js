import styled from 'styled-components/native';

const ProductRowTitle = styled.Text`
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.roboto(700, false, true)};
    margin-bottom: 16px;
`;

export default ProductRowTitle;
