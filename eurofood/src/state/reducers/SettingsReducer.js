import { FAILURE, SUCCESS } from './../../constants/BaseConstants';
import {
    GET_SERVER_SETTINGS,
    SET_HOME_TEMPLATE,
    SET_HOME_VIEWABLE_ITEMS
} from './../../constants/SettingsConstants';

import { REDUCER_NAME_SETTINGS } from '../../constants/StoreConstants';
import { createTransform } from 'redux-persist';

export const initialState = {
    server: {},
    home: [],
    homeViewableItems: [],
    isLoadingSettings: false
};

export const SettingsReducerTransform = createTransform(
    inboundState => {
        return { ...inboundState };
    },
    outboundState => {
        return {
            ...outboundState,
            server: initialState.server,
            home: initialState.home,
            homeViewableItems: initialState.homeViewableItems
        };
    },
    {
        whitelist: REDUCER_NAME_SETTINGS
    }
);

const SettingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SERVER_SETTINGS:
            return { ...state, isLoadingSettings: true };
        case GET_SERVER_SETTINGS + SUCCESS:
            return {
                ...state,
                server: action.server,
                isLoadingSettings: false
            };
        case GET_SERVER_SETTINGS + FAILURE:
            return {
                ...state,
                server: initialState.server,
                home: initialState.home,
                isLoadingSettings: false
            };
        case SET_HOME_TEMPLATE:
            return { ...state, home: action.home };
        case SET_HOME_VIEWABLE_ITEMS + SUCCESS:
            return {
                ...state,
                homeViewableItems: action.items
            };
        default:
            return state;
    }
};

export default SettingsReducer;
