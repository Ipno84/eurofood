import { REDUCER_NAME_CART } from '../../../constants/StoreConstants';

export default function getSelectedBillingAddressIdSelector(state) {
    return state[REDUCER_NAME_CART].selectedBillingAddressId;
}
