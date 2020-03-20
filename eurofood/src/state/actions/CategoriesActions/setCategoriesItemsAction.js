import { SET_CATEGORIES_ITEMS } from '../../../constants/CategoriesConstants';

export default function setCategoriesItemsAction(items, force) {
    return {
        type: SET_CATEGORIES_ITEMS,
        items,
        force
    };
}
