import { fork } from 'redux-saga/effects';
import getMainSectionsWatcher from './watchers/getMainSectionsWatcher';
import getMissingCategoriesWatcher from './watchers/getMissingCategoriesWatcher';

export default function* CategoriesSaga() {
    yield fork(getMainSectionsWatcher);
    yield fork(getMissingCategoriesWatcher);
}
