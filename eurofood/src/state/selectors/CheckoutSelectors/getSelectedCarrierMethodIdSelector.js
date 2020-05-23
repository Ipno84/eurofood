import { REDUCER_NAME_CHECKOUT } from '../../../constants/StoreConstants';

export default function getSelectedCarrierMethodIdSelector(state) {
    return state[REDUCER_NAME_CHECKOUT].selectedCarrierMethodId;
}
