import { REDUCER_NAME_SETTINGS } from '../../../constants/StoreConstants';

export default function getHomeTemplateSelector(state) {
    return state[REDUCER_NAME_SETTINGS].home;
}
