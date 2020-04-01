import * as catImg from './../../assets/images/categories';

import {
    BASIC_TOKEN,
    ENDPOINT_CATEGORIES,
    ENDPOINT_IMAGES,
    HOST,
    SUFFIX
} from './../../constants/ApiConstants';
import { useEffect, useState } from 'react';

import { category } from './../../assets/images/placeholder';

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
    const [imageSource, setImageSource] = useState(
        id && CatImgMap[id] ? CatImgMap[id] : category
    );
    const [isRemote, setIsRemote] = useState(false);
    useEffect(() => {
        if (id && !CatImgMap[id]) {
            fetch(
                `${HOST}/${SUFFIX}/${ENDPOINT_IMAGES}/${ENDPOINT_CATEGORIES}/${id}/category_default`,
                {
                    headers: {
                        Authorization: 'Basic ' + BASIC_TOKEN
                    }
                }
            ).then(res => {
                if (res.status === 200) {
                    setImageSource({
                        uri: `${HOST}/c/${id}-category_default/image.jpg`
                    });
                    setIsRemote(true);
                }
            });
        }
    }, [id]);
    const onError = () => setImageSource(category);
    return { imageSource, onError, isRemote };
}
