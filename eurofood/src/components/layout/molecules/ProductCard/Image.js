import ProductImage from '../../atoms/Card/ProductImage';
import ProductImageWrapper from '../../atoms/Card/ProductImageWrapper';
import React from 'react';

const Image = ({ id }) => {
    if (!id) return null;
    return (
        <ProductImageWrapper>
            <ProductImage id={id} resizeMethod="scale" />
        </ProductImageWrapper>
    );
};

export default Image;
