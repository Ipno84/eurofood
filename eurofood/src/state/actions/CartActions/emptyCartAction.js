import { EMPTY_CART } from './../../../constants/CartConstants';

export default function emptyCartAction() {
    return {
        type: EMPTY_CART
    };
}
