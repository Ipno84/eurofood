import { FAILURE, SUCCESS } from './../../constants/BaseConstants';

import { GET_SERVER_SETTINGS } from './../../constants/SettingsConstants';
import { createTransform } from 'redux-persist';

export const initialState = {
    server: {}
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
    }
);

const SettingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SERVER_SETTINGS + SUCCESS:
            return {
                ...state,
                server: action.server
            };
        case GET_SERVER_SETTINGS + FAILURE:
            return {
                ...state,
                server: initialState.server
            };
        default:
            return state;
    }
};

export default SettingsReducer;
