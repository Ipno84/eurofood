import React, { useState } from 'react';

import styled from 'styled-components/native';
import useProductDefaultImage from './../../../../hooks/products/useProductDefaultImage';

const Image = styled.Image`
    width: 100%;
    height: 100%;
`;

const ProductImage = ({ id, resizeMethod, resizeMode, id_default_image }) => {
    const { imageSource, onError } = useProductDefaultImage(
        id,
        id_default_image
    );
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
