import styled from 'styled-components/native';

const ProductNameWrapper = styled.View`
    align-items: center;
    justify-content: center;
    padding: 8px;
    flex: 1.5;
    background-color: ${({ theme }) => theme.colors.lightGray(1)};
`;

export default ProductNameWrapper;
