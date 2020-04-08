import {
    BASIC_TOKEN,
    ENDPOINT_IMAGES,
    ENDPOINT_PRODUCTS,
    HOST,
    SUFFIX
} from './../../constants/ApiConstants';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getImageUriFromCachedImagesSelector from './../../state/selectors/CacheSelectors/getImageUriFromCachedImagesSelector';
import getProductItemDefaultImageIdSelector from './../../state/selectors/ProductsSelectors/getProductItemDefaultImageIdSelector';
import { product } from './../../assets/images/placeholder';
import setCachedImageUriAction from './../../state/actions/CacheActions/setCachedImageUriAction';

export default function useProductDefaultImage(id) {
    const isMounted = useRef(true);
    const dispatch = useDispatch();
    const setCachedImageUri = useCallback(
        ({ key, value }) => dispatch(setCachedImageUriAction({ key, value })),
        [dispatch]
    );
    let url = `${HOST}/${SUFFIX}/${ENDPOINT_IMAGES}/${ENDPOINT_PRODUCTS}/${id}/${idDefaultImage}/large_default`;
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
    const cachedUri = useSelector(state =>
        getImageUriFromCachedImagesSelector(state, url, id && idDefaultImage)
    );
    useEffect(() => {
        const uri = `${HOST}/${idDefaultImage}-large_default/image.jpg`;
        if (id && idDefaultImage && !cachedUri) {
            url = `${HOST}/${SUFFIX}/${ENDPOINT_IMAGES}/${ENDPOINT_PRODUCTS}/${id}/${idDefaultImage}/large_default`;
            fetch(url, {
                headers: {
                    Authorization: 'Basic ' + BASIC_TOKEN
                }
            })
                .then(res => {
                    if (res.status === 200) {
                        isMounted.current && setImageSource({ uri });
                        setCachedImageUri({
                            key: url,
                            value: uri
                        });
                    }
                })
                .catch(error => console.log(error));
        } else if (
            id &&
            idDefaultImage &&
            cachedUri &&
            uri &&
            cachedUri !== uri
        ) {
            isMounted.current && setImageSource({ uri });
        }
    }, [id, idDefaultImage]);
    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    });
    const onError = () => {
        isMounted.current && setImageSource(product);
    };
    return { imageSource, onError };
}
