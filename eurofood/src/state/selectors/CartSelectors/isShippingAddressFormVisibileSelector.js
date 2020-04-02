import { REDUCER_NAME_CART } from '../../../constants/StoreConstants';

export default function isShippingAddressFormVisibileSelector(state) {
    return state[REDUCER_NAME_CART].showShippingAddressForm;
}
