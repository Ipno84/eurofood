import { fork } from 'redux-saga/effects';
import onSetSeachWatcher from './watchers/onSetSeachWatcher';
import onSetSearchCategoryIdWatcher from './watchers/onSetSearchCategoryIdWatcher';

export default function* SearchSaga() {
    yield fork(onSetSeachWatcher);
    yield fork(onSetSearchCategoryIdWatcher);
}
