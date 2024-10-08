import {
    REDUCER_NAME_ADDRESSES,
    REDUCER_NAME_CACHE,
    REDUCER_NAME_CART,
    REDUCER_NAME_CATEGORIES,
    REDUCER_NAME_CHECKOUT,
    REDUCER_NAME_CLIENT,
    REDUCER_NAME_ERRORS,
    REDUCER_NAME_ORDERS,
    REDUCER_NAME_PRODUCTS,
    REDUCER_NAME_SEARCH,
    REDUCER_NAME_SETTINGS,
    REDUCER_NAME_CARRIERS
} from './../../constants/StoreConstants';

import AddressesReducer from './AddressesReducer';
import CacheReducer from './CacheReducer';
import CartReducer from './CartReducer';
import CategoriesReducer from './CategoriesReducer';
import CheckoutReducer from './CheckoutReducer';
import ClientReducer from './ClientReducer';
import ErrorsReducer from './ErrorsReducer';
import OrdersReducer from './OrdersReducer';
import ProductsReducer from './ProductsReducer';
import SearchReducer from './SearchReducer';
import SettingsReducer from './SettingsReducer';
import CarriersReducer from './CarriersReducer';

export default {
    [REDUCER_NAME_SETTINGS]: SettingsReducer,
    [REDUCER_NAME_CATEGORIES]: CategoriesReducer,
    [REDUCER_NAME_PRODUCTS]: ProductsReducer,
    [REDUCER_NAME_CACHE]: CacheReducer,
    [REDUCER_NAME_SEARCH]: SearchReducer,
    [REDUCER_NAME_CART]: CartReducer,
    [REDUCER_NAME_CLIENT]: ClientReducer,
    [REDUCER_NAME_ERRORS]: ErrorsReducer,
    [REDUCER_NAME_ORDERS]: OrdersReducer,
    [REDUCER_NAME_ADDRESSES]: AddressesReducer,
    [REDUCER_NAME_CHECKOUT]: CheckoutReducer,
    [REDUCER_NAME_CARRIERS]: CarriersReducer
};
