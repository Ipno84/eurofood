import { REDUCER_NAME_CATEGORIES } from '../../../constants/StoreConstants';

export default function isCategoryLoadingSelector(state) {
    return state[REDUCER_NAME_CATEGORIES].isCategoryLoading;
}
