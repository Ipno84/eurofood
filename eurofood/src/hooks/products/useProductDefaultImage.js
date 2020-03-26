import { HOST } from './../../constants/ApiConstants';
import getProductItemDefaultImageIdSelector from './../../state/selectors/ProductsSelectors/getProductItemDefaultImageIdSelector';
import { product } from './../../assets/images/placeholder';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function useProductDefaultImage(id) {
    const idDefaultImage = useSelector(state =>
        getProductItemDefaultImageIdSelector(state, id)
    );
    const [imageSource, setImageSource] = useState(
        idDefaultImage
            ? {
                  uri: `${HOST}/${idDefaultImage}-large_default/image.jpg`
              }
            : product
    );
    const onError = () => setImageSource(product);
    return { imageSource, onError };
}
