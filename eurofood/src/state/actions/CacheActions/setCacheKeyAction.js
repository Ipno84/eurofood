import { SET_CACHE_KEY } from '../../../constants/CacheConstants';

export default function setCacheKeyAction(key, value) {
    return { type: SET_CACHE_KEY, key, value };
}
