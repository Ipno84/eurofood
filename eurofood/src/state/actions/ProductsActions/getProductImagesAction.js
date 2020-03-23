import { FAILURE, SUCCESS } from '../../../constants/BaseConstants';

import { GET_PRODUCT_IMAGES } from '../../../constants/ProductsConstants';

export default function getProductImagesAction(payload) {
    if (payload.error) {
        return {
            type: GET_PRODUCT_IMAGES + FAILURE
        };
    } else if (payload.id && payload.urls) {
        return {
            type: GET_PRODUCT_IMAGES + SUCCESS,
            id: payload.id,
            urls: payload.urls
        };
    }
    return {
        type: GET_PRODUCT_IMAGES,
        id
    };
}
