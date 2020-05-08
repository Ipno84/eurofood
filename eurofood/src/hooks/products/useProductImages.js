import { useCallback, useEffect } from 'react';

import getProductImagesAction from './../../state/actions/ProductsActions/getProductImagesAction';
import { useDispatch } from 'react-redux';

export default function useProductImages(id, defaultImageId) {
    const dispatch = useDispatch();
    const getProductImages = useCallback(
        () => dispatch(getProductImagesAction({ id, defaultImageId })),
        [dispatch, id]
    );
    useEffect(() => {
        getProductImages();
    }, [getProductImages, id]);
}
