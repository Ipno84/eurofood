import { REDUCER_NAME_CLIENT } from '../../../../constants/StoreConstants';

export default function getAddressFormSelector(state) {
    return state[REDUCER_NAME_CLIENT].addressForm;
}
