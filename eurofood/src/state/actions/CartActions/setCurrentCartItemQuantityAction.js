import { SET_PRODUCT_CART_ITEM_QUANTITY } from './../../../constants/CartConstants';

export default function setCurrentCartItemQuantityAction(id, quantity) {
    return {
        type: SET_PRODUCT_CART_ITEM_QUANTITY,
        id,
        quantity
    };
}
