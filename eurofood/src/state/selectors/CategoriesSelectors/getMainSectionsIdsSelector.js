import { REDUCER_NAME_CATEGORIES } from '../../../constants/StoreConstants';

export default function getMainSectionsIdsSelector(state) {
    return state[REDUCER_NAME_CATEGORIES].mainSections;
}
