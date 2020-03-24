import styled from 'styled-components/native';

const ProductImageWrapper = styled.View`
    width: 100%;
    height: ${({ height }) => height}px;
    position: relative;
    min-height: 200px;
`;

export default ProductImageWrapper;
