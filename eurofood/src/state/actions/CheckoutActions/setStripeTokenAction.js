import { SET_STRIPE_TOKEN } from '../../../constants/CheckoutConstants';

export default function setStripeTokenAction(token) {
    return {
        type: SET_STRIPE_TOKEN,
        token
    };
}
