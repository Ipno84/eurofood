import {
    REDUCER_NAME_CACHE,
    REDUCER_NAME_CART,
    REDUCER_NAME_CATEGORIES,
    REDUCER_NAME_CONTENTS,
    REDUCER_NAME_PRODUCTS,
    REDUCER_NAME_SEARCH,
    REDUCER_NAME_SETTINGS
} from './../../constants/StoreConstants';

import CacheReducer from './CacheReducer';
import CartReducer from './CartReducer';
import CategoriesReducer from './CategoriesReducer';
import ContentsReducer from './ContentsReducer';
import ProductsReducer from './ProductsReducer';
import SearchReducer from './SearchReducer';
import SettingsReducer from './SettingsReducer';

export default {
    [REDUCER_NAME_CONTENTS]: ContentsReducer,
    [REDUCER_NAME_SETTINGS]: SettingsReducer,
    [REDUCER_NAME_CATEGORIES]: CategoriesReducer,
    [REDUCER_NAME_PRODUCTS]: ProductsReducer,
    [REDUCER_NAME_CACHE]: CacheReducer,
    [REDUCER_NAME_SEARCH]: SearchReducer,
    [REDUCER_NAME_CART]: CartReducer
};
