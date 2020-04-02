import { REDUCER_NAME_ADDRESSES } from '../../../../constants/StoreConstants';

export default function getAddressFormSelector(state) {
    return state[REDUCER_NAME_ADDRESSES].addressForm;
}
