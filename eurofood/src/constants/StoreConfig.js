import {
    REDUCER_NAME_CONTENTS,
    REDUCER_NAME_SETTINGS,
    STORE_KEY,
    STORE_VERSION
} from './StoreConstants';

import AsyncStorage from '@react-native-community/async-storage';
import { ContentsReducerTransform } from './../state/reducers/ContentsReducer';
import { SettingsReducerTransform } from './../state/reducers/SettingsReducer';

export default {
    version: STORE_VERSION,
    key: STORE_KEY,
    storage: AsyncStorage,
    debug: process.env.NODE_ENV === 'development',
    whietelist: [REDUCER_NAME_CONTENTS, REDUCER_NAME_SETTINGS],
    blacklist: [],
    transforms: [ContentsReducerTransform, SettingsReducerTransform]
};
