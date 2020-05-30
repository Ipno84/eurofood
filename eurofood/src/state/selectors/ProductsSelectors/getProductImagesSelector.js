import { REDUCER_NAME_PRODUCTS } from '../../../constants/StoreConstants';

export default function getProductImagesSelector(state) {
    return state[REDUCER_NAME_PRODUCTS].images;
}
