import { REDUCER_NAME_CLIENT } from '../../../constants/StoreConstants';

export default function isBillingAddressSubmittedSelector(state) {
    return state[REDUCER_NAME_CLIENT].billingAddressSubmitted;
}
