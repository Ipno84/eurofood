import { STORE_KEY, STORE_VERSION } from './StoreConstants';

import AsyncStorage from '@react-native-community/async-storage';
import { CacheReducerTransform } from './../state/reducers/CacheReducer';
import { CartReducerTransform } from './../state/reducers/CartReducer';
import { CategoriesReducerTransform } from './../state/reducers/CategoriesReducer';
import { ProductsReducerTransform } from './../state/reducers/ProductsReducer';
import { SearchReducerTransform } from './../state/reducers/SearchReducer';
import { SettingsReducerTransform } from './../state/reducers/SettingsReducer';

export default {
    version: STORE_VERSION,
    key: STORE_KEY,
    storage: AsyncStorage,
    debug: process.env.NODE_ENV === 'development',
    transforms: [
        SettingsReducerTransform,
        CategoriesReducerTransform,
        ProductsReducerTransform,
        CacheReducerTransform,
        SearchReducerTransform,
        CartReducerTransform
    ]
};
