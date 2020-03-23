import { HOST } from './../../constants/ApiConstants';
import { category } from './../../assets/images/placeholder';
import { useState } from 'react';

export default function useCategoryDefaultImage(id) {
    const [imageSource, setImageSource] = useState({
        uri: `${HOST}/c/${id}-category_default/image.jpg`
    });
    const onError = () => setImageSource(category);
    return { imageSource, onError };
}
