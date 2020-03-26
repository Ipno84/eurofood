import React from 'react';
import styled from 'styled-components/native';
import useProductDefaultImage from './../../../../hooks/products/useProductDefaultImage';

const Image = styled.Image`
    width: 100%;
    height: 100%;
`;

const ProductImage = ({ id, resizeMethod, resizeMode }) => {
    const { imageSource, onError } = useProductDefaultImage(id);
    return (
        <Image
            resizeMethod={resizeMethod}
            source={imageSource}
            onError={() => onError()}
            resizeMode={resizeMode}
        />
    );
};
export default ProductImage;
