import { FAILURE, SUCCESS } from '../../../constants/BaseConstants';

import { GET_MAIN_SECTIONS } from '../../../constants/CategoriesConstants';

export default function getMainSectionsAction(payload) {
    if (payload && payload.mainSections) {
        return {
            type: GET_MAIN_SECTIONS + SUCCESS,
            mainSections: payload.mainSections
        };
    } else if (payload && payload.error) {
        return {
            type: GET_MAIN_SECTIONS + FAILURE,
            error: payload.error
        };
    }
    return { type: GET_MAIN_SECTIONS };
}
