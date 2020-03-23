import { HOST } from './../../constants/ApiConstants';
import { product } from './../../assets/images/placeholder';
import { useState } from 'react';

export default function useProductDefaultImage(id, id_default_image) {
    const [imageSource, setImageSource] = useState(
        id_default_image
            ? {
                  uri: `${HOST}/${id_default_image}-large_default/image.jpg`
              }
            : product
    );
    const onError = () => setImageSource(product);
    return { imageSource, onError };
}
