import { REDUCER_NAME_CACHE } from '../../../constants/StoreConstants';

export default function getCachedImagesUriSelector(state) {
    return state[REDUCER_NAME_CACHE].cachedImagesUri;
}
