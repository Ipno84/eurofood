import { GET_MISSING_CATEGORIES } from '../../../constants/CategoriesConstants';

export default function getMissingCategoriesAction(ids) {
    return {
        type: GET_MISSING_CATEGORIES,
        ids
    };
}
