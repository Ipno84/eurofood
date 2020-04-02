import { REDUCER_NAME_CART } from '../../../constants/StoreConstants';

export default function isBillingAddressFormVisibileSelector(state) {
    return state[REDUCER_NAME_CART].showBillingAddressForm;
}
