import React, { useState } from 'react';

import Badge from './../Badge';
import Image from './Image';
import ProductImageWrapper from './ProductImageWrapper';
import getProductItemDefaultImageIdSelector from '../../../../../../state/selectors/ProductsSelectors/getProductItemDefaultImageIdSelector';
import isProductItemActiveSelector from '../../../../../../state/selectors/ProductsSelectors/isProductItemActiveSelector';
import useProductDefaultImage from '../../../../../../hooks/products/useProductDefaultImage';
import { useSelector } from 'react-redux';

const ProductImage = ({ id }) => {
    const defaultImageId = useSelector(state =>
        getProductItemDefaultImageIdSelector(state, id)
    );
    const isProductItemActive = useSelector(state =>
        isProductItemActiveSelector(state, id)
    );
    const { imageSource, onError } = useProductDefaultImage(id, defaultImageId);
    const [height, setHeight] = useState(0);
    return (
        <ProductImageWrapper height={height}>
            {isProductItemActive ? <Badge id={id} absolute={true} /> : null}
            <Image
                resizeMethod="resize"
                onLayout={e => setHeight(e.nativeEvent.layout.height)}
                source={imageSource}
                onError={() => onError()}
            />
        </ProductImageWrapper>
    );
};

export default ProductImage;
