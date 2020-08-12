import { REDUCER_NAME_CHECKOUT } from '../../../constants/StoreConstants';

export default function getStripeTokenSelector(state) {
    return state[REDUCER_NAME_CHECKOUT].token;
}
