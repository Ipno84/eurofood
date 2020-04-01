import { FAILURE, SUCCESS } from '../../../constants/BaseConstants';

import { SET_HOME_VIEWABLE_ITEMS } from '../../../constants/SettingsConstants';

export default function setHomeViewableItemsAction(payload) {
    if (payload && payload.success && payload.items) {
        return {
            type: SET_HOME_VIEWABLE_ITEMS + SUCCESS,
            items: payload.items
        };
    } else if (payload && payload.error) {
        return {
            type: SET_HOME_VIEWABLE_ITEMS + FAILURE,
            error: payload.error
        };
    } else if (payload && payload.items) {
        return {
            type: SET_HOME_VIEWABLE_ITEMS,
            items: payload.items
        };
    }
    return {
        type: SET_HOME_VIEWABLE_ITEMS
    };
}
