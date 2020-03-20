import { SET_PRODUCTS_ITEMS } from '../../../constants/ProductsConstants';

export default function setProductsItemsAction(items, force) {
    return {
        type: SET_PRODUCTS_ITEMS,
        items,
        force
    };
}
