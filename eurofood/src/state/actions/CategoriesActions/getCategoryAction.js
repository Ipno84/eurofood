import { FAILURE, SUCCESS } from '../../../constants/BaseConstants';

import { GET_CATEGORY } from '../../../constants/CategoriesConstants';

export default function getCategoryAction(payload) {
    if (payload && payload.success) {
        return {
            type: GET_CATEGORY + SUCCESS
        };
    } else if (payload && payload.error) {
        return {
            type: GET_CATEGORY + FAILURE,
            error: payload.error
        };
    }
    return {
        type: GET_CATEGORY,
        id: payload.id
    };
}
