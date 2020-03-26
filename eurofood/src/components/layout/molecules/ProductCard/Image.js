import ProductImage from '../../atoms/Card/ProductImage';
import ProductImageWrapper from '../../atoms/Card/ProductImageWrapper';
import React from 'react';

const Image = ({ id }) => {
    return (
        <ProductImageWrapper>
            <ProductImage id={id} resizeMethod="scale" resizeMode="contain" />
        </ProductImageWrapper>
    );
};

export default Image;
