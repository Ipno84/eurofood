import styled from 'styled-components/native';

const ProductImageWrapper = styled.View`
    width: 100%;
    height: ${({ height }) => (height ? height : 360)}px;
    position: relative;
`;

export default ProductImageWrapper;
