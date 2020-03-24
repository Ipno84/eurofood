import React, { useState } from 'react';

import Badge from './../Badge';
import Image from './Image';
import ProductImageWrapper from './ProductImageWrapper';
import getProductItemDefaultImageIdSelector from '../../../../../../state/selectors/ProductsSelectors/getProductItemDefaultImageIdSelector';
import useProductDefaultImage from '../../../../../../hooks/products/useProductDefaultImage';
import { useSelector } from 'react-redux';

const ProductImage = ({ id }) => {
    const defaultImageId = useSelector(state =>
        getProductItemDefaultImageIdSelector(state, id)
    );
    const { imageSource, onError } = useProductDefaultImage(id, defaultImageId);
    const [height, setHeight] = useState(0);
    return (
        <ProductImageWrapper height={height}>
            <Badge id={id} absolute={true} />
            <Image
                onLayout={e => setHeight(e.nativeEvent.layout.width)}
                source={imageSource}
                onError={() => onError()}
                resizeMode="contain"
            />
        </ProductImageWrapper>
    );
};

export default ProductImage;
