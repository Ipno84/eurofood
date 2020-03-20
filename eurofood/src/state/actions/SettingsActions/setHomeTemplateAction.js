import { SET_HOME_TEMPLATE } from '../../../constants/SettingsConstants';

export default function setHomeTemplateAction(payload) {
    return {
        type: SET_HOME_TEMPLATE,
        home: payload.home
    };
}
