import {
    REDUCER_NAME_CACHE,
    REDUCER_NAME_CATEGORIES,
    REDUCER_NAME_CONTENTS,
    REDUCER_NAME_PRODUCTS,
    REDUCER_NAME_SETTINGS,
    STORE_KEY,
    STORE_VERSION
} from './StoreConstants';

import AsyncStorage from '@react-native-community/async-storage';
import { CacheReducerTransform } from './../state/reducers/CacheReducer';
import { CategoriesReducerTransform } from './../state/reducers/CategoriesReducer';
import { ContentsReducerTransform } from './../state/reducers/ContentsReducer';
import { ProductsReducerTransform } from './../state/reducers/ProductsReducer';
import { SettingsReducerTransform } from './../state/reducers/SettingsReducer';

export default {
    version: STORE_VERSION,
    key: STORE_KEY,
    storage: AsyncStorage,
    debug: process.env.NODE_ENV === 'development',
    whietelist: [
        REDUCER_NAME_CONTENTS,
        REDUCER_NAME_SETTINGS,
        REDUCER_NAME_CATEGORIES,
        REDUCER_NAME_PRODUCTS,
        REDUCER_NAME_CACHE
    ],
    blacklist: [],
    transforms: [
        ContentsReducerTransform,
        SettingsReducerTransform,
        CategoriesReducerTransform,
        ProductsReducerTransform,
        CacheReducerTransform
    ]
};
