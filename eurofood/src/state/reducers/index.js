import {
    REDUCER_NAME_CONTENTS,
    REDUCER_NAME_SETTINGS
} from './../../constants/StoreConstants';

import ContentsReducer from './ContentsReducer';
import SettingsReducer from './SettingsReducer';

export default {
    [REDUCER_NAME_CONTENTS]: ContentsReducer,
    [REDUCER_NAME_SETTINGS]: SettingsReducer
};
