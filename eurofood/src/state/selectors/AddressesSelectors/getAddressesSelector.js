import { REDUCER_NAME_ADDRESSES } from '../../../constants/StoreConstants';

export default function getAddressesSelector(state) {
    return state[REDUCER_NAME_ADDRESSES].items;
}
