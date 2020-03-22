import { SET_CACHE_ITEMS } from '../../../constants/CacheConstants';

export default function setCacheItemsAction({ items }) {
    return { type: SET_CACHE_ITEMS, items };
}
