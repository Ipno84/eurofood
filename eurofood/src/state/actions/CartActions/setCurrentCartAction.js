import { SET_CURRENT_CART } from './../../../constants/CartConstants';

export default function setCurrentCartAction(cart) {
    return {
        type: SET_CURRENT_CART,
        cart
    };
}
