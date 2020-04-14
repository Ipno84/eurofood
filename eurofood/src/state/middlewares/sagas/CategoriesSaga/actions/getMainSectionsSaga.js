import { all, call, put } from 'redux-saga/effects';

import getMainSectionsAction from './../../../../actions/CategoriesActions/getMainSectionsAction';
import getMainSectionsCall from './../../../../../api/calls/CategoriesCalls/getMainSectionsCall';

export default function* getMainSectionsSaga() {
    try {
        const res = yield call(getMainSectionsCall);
        yield all([
            put(getMainSectionsAction({ mainSections: res.categories }))
        ]);
    } catch (error) {
        yield put(getMainSectionsAction({ error }));
    }
}
