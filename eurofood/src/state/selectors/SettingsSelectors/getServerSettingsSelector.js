import { REDUCER_NAME_SETTINGS } from '../../../constants/StoreConstants';

export default function getServerSettingsSelector(state) {
    return state[REDUCER_NAME_SETTINGS].server;
}
