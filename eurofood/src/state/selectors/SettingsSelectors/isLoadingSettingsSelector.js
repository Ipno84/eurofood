import { REDUCER_NAME_SETTINGS } from '../../../constants/StoreConstants';

export default function isLoadingSettingsSelector(state) {
    return state[REDUCER_NAME_SETTINGS].isLoadingSettings;
}
