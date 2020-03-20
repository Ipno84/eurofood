import { all, call, put } from 'redux-saga/effects';

import arrayToObject from '../../../../../helpers/arrayToObject';
import getMainSectionsAction from './../../../../actions/CategoriesActions/getMainSectionsAction';
import getMainSectionsCall from './../../../../../api/calls/CategoriesCalls/getMainSectionsCall';
import setCategoriesItemsAction from './../../../../actions/CategoriesActions/setCategoriesItemsAction';

export default function* getMainSectionsSaga() {
    try {
        const res = yield call(getMainSectionsCall);
        const categories = arrayToObject(res.categories);
        const mainSections = res.categories.map(e => e.id);
        yield all([
            put(setCategoriesItemsAction(categories)),
            put(getMainSectionsAction({ mainSections }))
        ]);
    } catch (error) {
        yield put(getMainSectionsAction({ error }));
    }
}
