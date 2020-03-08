import {
    CONTENTS_REDUCER_NAME,
    STORE_KEY,
    STORE_VERSION,
} from './StoreConstants';

import AsyncStorage from '@react-native-community/async-storage';
import { ContentsReducerTransform } from './../state/reducers/ContentsReducer';

export default {
    version: STORE_VERSION,
    key: STORE_KEY,
    storage: AsyncStorage,
    debug: process.env.NODE_ENV === 'development',
    whietelist: [CONTENTS_REDUCER_NAME],
    blacklist: [],
    transforms: [ContentsReducerTransform],
};
