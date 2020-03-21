import { FAILURE, SUCCESS } from './../../constants/BaseConstants';
import {
    GET_SERVER_SETTINGS,
    SET_HOME_TEMPLATE
} from './../../constants/SettingsConstants';

import { REDUCER_NAME_SETTINGS } from '../../constants/StoreConstants';
import { createTransform } from 'redux-persist';

export const initialState = {
    server: {},
    home: []
};

export const SettingsReducerTransform = createTransform(
    inboundState => {
        return { ...inboundState };
    },
    outboundState => {
        return {
            ...outboundState,
            server: initialState.server
        };
    },
    {
        whitelist: REDUCER_NAME_SETTINGS
    }
);

const SettingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SERVER_SETTINGS + SUCCESS:
            return { ...state, server: action.server };
        case GET_SERVER_SETTINGS + FAILURE:
            return {
                ...state,
                server: initialState.server,
                home: initialState.home
            };
        case SET_HOME_TEMPLATE:
            return { ...state, home: action.home };
        default:
            return state;
    }
};

export default SettingsReducer;
