import React, { useState } from 'react';

import Image from './Image';
import ProductImageWrapper from './ProductImageWrapper';
import useProductDefaultImage from '../../../../../hooks/products/useProductDefaultImage';

const ProductImage = ({
    id,
    resizeMode,
    id_default_image,
    discountComponent
}) => {
    const [height, setHeight] = useState(0);
    const { imageSource, onError } = useProductDefaultImage(
        id,
        id_default_image
    );
    return (
        <ProductImageWrapper height={height}>
            {discountComponent && discountComponent()}
            <Image
                onLayout={e => setHeight(e.nativeEvent.layout.width)}
                source={imageSource}
                onError={() => onError()}
                resizeMode={resizeMode}
            />
        </ProductImageWrapper>
    );
};

export default ProductImage;
