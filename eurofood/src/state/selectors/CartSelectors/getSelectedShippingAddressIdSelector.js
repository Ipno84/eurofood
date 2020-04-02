import { REDUCER_NAME_CART } from '../../../constants/StoreConstants';

export default function getSelectedShippingAddressIdSelector(state) {
    return state[REDUCER_NAME_CART].selectedShippingAddressId;
}
