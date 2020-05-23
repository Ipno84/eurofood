import { REDUCER_NAME_ORDERS } from '../../../constants/StoreConstants';

export default function getSelectedPaymentMethodSelector(state) {
    return state[REDUCER_NAME_ORDERS].selectedPaymentMethod;
}
