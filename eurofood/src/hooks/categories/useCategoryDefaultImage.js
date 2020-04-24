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
    50: catImg.inEvidenza,
    51: catImg.offerte,
    52: catImg.nuoviArrivi,
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
    71: catImg.vegetali,
    86: catImg.superOfferte,
    100: catImg.bar,
    101: catImg.ristoranti,
    102: catImg.pizzerie,
    103: catImg.hotel,
    109: catImg.attrezzature
};

export default function useCategoryDefaultImage(id) {
    const dispatch = useDispatch();
    const [isRemote, setIsRemote] = useState(false);
    const cachedUri = useSelector(state =>
        getImageUriFromCachedImagesSelector(state, url, id)
    );
    const setCachedImageUri = useCallback(
        ({ key, value }) => dispatch(setCachedImageUriAction({ key, value })),
        [dispatch]
    );
    let url = `${HOST}/${SUFFIX}/${ENDPOINT_IMAGES}/${ENDPOINT_CATEGORIES}/${id}/category_default`;
    const [imageSource, setImageSource] = useState(
        id && CatImgMap[id]
            ? CatImgMap[id]
            : cachedUri
            ? { uri: cachedUri }
            : category
    );
    useEffect(() => {
        let isSubscribed = true;
        if (id && !CatImgMap[id] && !cachedUri) {
            url = `${HOST}/${SUFFIX}/${ENDPOINT_IMAGES}/${ENDPOINT_CATEGORIES}/${id}/category_default`;
            fetch(url, {
                headers: {
                    Authorization: 'Basic ' + BASIC_TOKEN
                }
            })
                .then(res => {
                    if (res.status === 200) {
                        isSubscribed &&
                            setImageSource({
                                uri: `${HOST}/c/${id}-category_default/image.jpg`
                            });
                        setCachedImageUri({
                            key: url,
                            value: `${HOST}/c/${id}-category_default/image.jpg`
                        });
                        isSubscribed && setIsRemote(true);
                    }
                })
                .catch(error => console.log(error));
        } else if (
            cachedUri &&
            cachedUri !== `${HOST}/c/${id}-category_default/image.jpg` &&
            isSubscribed
        ) {
            setImageSource({
                uri: `${HOST}/c/${id}-category_default/image.jpg`
            });
        }
        return () => (isSubscribed = false);
    }, [id, cachedUri]);
    const onError = () => {
        if (isSubscribed) setImageSource(category);
    };
    return {
        imageSource,
        onError,
        isRemote,
        isDefault: imageSource === category
    };
}
