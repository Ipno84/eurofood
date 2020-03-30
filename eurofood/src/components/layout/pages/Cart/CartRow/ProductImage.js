import React from 'react';
import styled from 'styled-components/native';
import useProductDefaultImage from '../../../../../hooks/products/useProductDefaultImage';

const ProductImage = ({ id }) => {
    const { imageSource, onError } = useProductDefaultImage(id);
    return (
        <Image
            source={imageSource}
            onError={() => onError()}
            resizeMode="contain"
        />
    );
};

export default ProductImage;

const Image = styled.Image`
    width: 100%;
    height: 100%;
`;
