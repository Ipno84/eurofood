import {
    REDUCER_NAME_ERRORS,
    REDUCER_NAME_SETTINGS,
    STORE_KEY,
    STORE_VERSION
} from './StoreConstants';

import { AddressesReducerTransform } from './../state/reducers/AddressesReducer';
import { CacheReducerTransform } from './../state/reducers/CacheReducer';
import { CartReducerTransform } from './../state/reducers/CartReducer';
import { CategoriesReducerTransform } from './../state/reducers/CategoriesReducer';
import { CheckoutReducerTransform } from './../state/reducers/CheckoutReducer';
import { ClientReducerTransform } from './../state/reducers/ClientReducer';
import FilesystemStorage from 'redux-persist-filesystem-storage';
import { OrdersReducerTransform } from './../state/reducers/OrdersReducer';
import { ProductsReducerTransform } from './../state/reducers/ProductsReducer';
import { SearchReducerTransform } from './../state/reducers/SearchReducer';

export default {
    version: STORE_VERSION,
    key: STORE_KEY,
    storage: FilesystemStorage,
    debug: process.env.NODE_ENV === 'development',
    blacklist: [REDUCER_NAME_ERRORS, REDUCER_NAME_SETTINGS],
    serialize: true,
    transforms: [
        CategoriesReducerTransform,
        ProductsReducerTransform,
        CacheReducerTransform,
        SearchReducerTransform,
        CartReducerTransform,
        ClientReducerTransform,
        AddressesReducerTransform,
        OrdersReducerTransform,
        CheckoutReducerTransform
    ]
};
