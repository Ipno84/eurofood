import * as catImg from './../../assets/images/categories';

import {
    BASIC_TOKEN,
    ENDPOINT_CATEGORIES,
    ENDPOINT_IMAGES,
    HOST,
    SUFFIX
} from './../../constants/ApiConstants';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { category } from './../../assets/images/placeholder';
import getImageUriFromCachedImagesSelector from './../../state/selectors/CacheSelectors/getImageUriFromCachedImagesSelector';
import setCachedImageUriAction from './../../state/actions/CacheActions/setCachedImageUriAction';

const CatImgMap = {
    12: catImg.salumi,
    19: catImg.farinePanature,
    49: catImg.bevande,
    53: catImg.carni,
    54: catImg.condimenti,
    58: catImg.latticini,
    60: catImg.noFood,
    61: catImg.noGlutine,
    65: catImg.pane,
    66: catImg.pastaRiso,
    67: catImg.pesce,
    68: catImg.piattiProntiPanini,
    69: catImg.stuzzicherie,
    70: catImg.vegano,
    71: catImg.vegetali
};

export default function useCategoryDefaultImage(id) {
    const dispatch = useDispatch();
    const setCachedImageUri = useCallback(
        ({ key, value }) => dispatch(setCachedImageUriAction({ key, value })),
        [dispatch]
    );
    let url = `${HOST}/${SUFFIX}/${ENDPOINT_IMAGES}/${ENDPOINT_CATEGORIES}/${id}/category_default`;
    const [imageSource, setImageSource] = useState(
        id && CatImgMap[id] ? CatImgMap[id] : category
    );
    const [isRemote, setIsRemote] = useState(false);
    const cachedUri = useSelector(state =>
        getImageUriFromCachedImagesSelector(state, url, id)
    );
    useEffect(() => {
        if (id && !CatImgMap[id] && !cachedUri) {
            url = `${HOST}/${SUFFIX}/${ENDPOINT_IMAGES}/${ENDPOINT_CATEGORIES}/${id}/category_default`;
            fetch(url, {
                headers: {
                    Authorization: 'Basic ' + BASIC_TOKEN
                }
            })
                .then(res => {
                    if (res.status === 200) {
                        setImageSource({
                            uri: `${HOST}/c/${id}-category_default/image.jpg`
                        });
                        setCachedImageUri({
                            key: url,
                            value: `${HOST}/c/${id}-category_default/image.jpg`
                        });
                        setIsRemote(true);
                    }
                })
                .catch(error => console.log(error));
        } else if (
            cachedUri &&
            cachedUri !== `${HOST}/c/${id}-category_default/image.jpg`
        ) {
            setImageSource({
                uri: `${HOST}/c/${id}-category_default/image.jpg`
            });
        }
    }, [id, cachedUri]);
    const onError = () => setImageSource(category);
    return { imageSource, onError, isRemote };
}
