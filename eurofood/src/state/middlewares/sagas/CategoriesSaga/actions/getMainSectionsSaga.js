import { all, call, put, select } from 'redux-saga/effects';

import arrayToObject from '../../../../../helpers/arrayToObject';
import getCategoriesMainSectionsCacheTimeSelector from './../../../../selectors/CacheSelectors/getCacheDataSelector/getCategoriesCacheDataSelector/getCategoriesMainSectionsCacheTimeSelector';
import getMainSectionsAction from './../../../../actions/CategoriesActions/getMainSectionsAction';
import getMainSectionsCall from './../../../../../api/calls/CategoriesCalls/getMainSectionsCall';
import getMaxExpirationTimeSelector from './../../../../selectors/CacheSelectors/getMaxExpirationTimeSelector';
import setCategoriesItemsAction from './../../../../actions/CategoriesActions/setCategoriesItemsAction';

export default function* getMainSectionsSaga() {
    try {
        const mainActionsCacheTime = yield select(
            getCategoriesMainSectionsCacheTimeSelector
        );
        const maxExpirationTime = yield select(getMaxExpirationTimeSelector);
        if (mainActionsCacheTime <= maxExpirationTime) {
            const res = yield call(getMainSectionsCall);
            const categories = arrayToObject(res.categories);
            const mainSections = res.categories.map(e => e.id);
            yield all([
                put(setCategoriesItemsAction(categories)),
                put(getMainSectionsAction({ mainSections }))
            ]);
        }
    } catch (error) {
        yield put(getMainSectionsAction({ error }));
    }
}
