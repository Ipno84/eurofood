import { REDUCER_NAME_SETTINGS } from '../../../constants/StoreConstants';

export default function getHomeViewbleItemsSelector(state) {
    return state[REDUCER_NAME_SETTINGS].homeViewableItems;
}
