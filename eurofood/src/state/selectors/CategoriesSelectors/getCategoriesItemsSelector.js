import { REDUCER_NAME_CATEGORIES } from '../../../constants/StoreConstants';

export default function getCategoriesItemsSelector(state) {
    return state[REDUCER_NAME_CATEGORIES].items;
}
