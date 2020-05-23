import { REDUCER_NAME_CHECKOUT } from '../../../constants/StoreConstants';

export default function getSelectedPaymentMethodIdSelector(state) {
    return state[REDUCER_NAME_CHECKOUT].selectedPaymentMethodId;
}
