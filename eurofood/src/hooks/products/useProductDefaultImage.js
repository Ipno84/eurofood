import {
    BASIC_TOKEN,
    ENDPOINT_IMAGES,
    ENDPOINT_PRODUCTS,
    HOST,
    SUFFIX
} from './../../constants/ApiConstants';
import { useEffect, useState } from 'react';

import getProductItemDefaultImageIdSelector from './../../state/selectors/ProductsSelectors/getProductItemDefaultImageIdSelector';
import { product } from './../../assets/images/placeholder';
import { useSelector } from 'react-redux';

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
    useEffect(() => {
        if (id && idDefaultImage) {
            fetch(
                `${HOST}/${SUFFIX}/${ENDPOINT_IMAGES}/${ENDPOINT_PRODUCTS}/${id}/${idDefaultImage}/large_default`,
                {
                    headers: {
                        Authorization: 'Basic ' + BASIC_TOKEN
                    }
                }
            ).then(res => {
                if (res.status === 200) {
                    setImageSource({
                        uri: `${HOST}/${idDefaultImage}-large_default/image.jpg`
                    });
                }
            });
        }
    }, [id, idDefaultImage]);
    const onError = () => setImageSource(product);
    return { imageSource, onError };
}
