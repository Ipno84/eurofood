import { FAILURE, SUCCESS } from './../../../constants/BaseConstants';

import { GET_SERVER_SETTINGS } from '../../../constants/SettingsConstants';

export default function getServerSettingsAction(payload) {
    if (payload && payload.server) {
        return { type: GET_SERVER_SETTINGS + SUCCESS, server: payload.server };
    } else if (payload && payload.error) {
        return {
            type: GET_SERVER_SETTINGS + FAILURE,
            error: payload.error
        };
    }
    return { type: GET_SERVER_SETTINGS };
}
