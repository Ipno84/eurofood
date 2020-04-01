import { REDUCER_NAME_ADDRESSES } from '../../../constants/StoreConstants';

export default function isAddressSubmittedSelector(state) {
    return state[REDUCER_NAME_ADDRESSES].addressSubmitted;
}
