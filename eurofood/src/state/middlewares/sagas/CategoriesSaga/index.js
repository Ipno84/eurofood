import { fork } from 'redux-saga/effects';
import getMainSectionsWatcher from './watchers/getMainSectionsWatcher';

export default function* CategoriesSaga() {
    yield fork(getMainSectionsWatcher);
}
