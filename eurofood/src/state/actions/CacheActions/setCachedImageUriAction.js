import { SET_CACHED_IMAGE_URI } from '../../../constants/CacheConstants';

export default function setCachedImageUriAction({ key, value }) {
    return { type: SET_CACHED_IMAGE_URI, key, value };
}
