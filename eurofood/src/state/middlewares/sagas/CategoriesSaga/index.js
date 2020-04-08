import { fork } from 'redux-saga/effects';
import getCategoryWatcher from './watchers/getCategoryWatcher';
import getMainSectionsWatcher from './watchers/getMainSectionsWatcher';
import getMissingCategoriesWatcher from './watchers/getMissingCategoriesWatcher';

export default function* CategoriesSaga() {
    yield fork(getMainSectionsWatcher);
    yield fork(getMissingCategoriesWatcher);
    yield fork(getCategoryWatcher);
}
