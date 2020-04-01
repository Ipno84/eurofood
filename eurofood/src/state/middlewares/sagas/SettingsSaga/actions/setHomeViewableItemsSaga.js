import { put, select } from 'redux-saga/effects';

import getHomeViewbleItemsSelector from './../../../../selectors/SettingsSelectors/getHomeViewbleItemsSelector';
import onlyUniqueFilter from './../../../../../helpers/onlyUniqueFilter';
import setHomeViewableItemsAction from './../../../../actions/SettingsActions/setHomeViewableItemsAction';

export default function* setHomeViewableItemsSaga({ items }) {
    try {
        const currentVisibileItems = yield select(getHomeViewbleItemsSelector);
        if (currentVisibileItems && currentVisibileItems.length > 0) {
            const newItems = [...items, ...currentVisibileItems].filter(
                onlyUniqueFilter
            );
            if (currentVisibileItems.length !== newItems.length) {
                yield put(
                    setHomeViewableItemsAction({
                        success: true,
                        items: newItems
                    })
                );
            }
        } else {
            yield put(
                setHomeViewableItemsAction({
                    success: true,
                    items
                })
            );
        }
    } catch (error) {
        yield put(setHomeViewableItemsAction({ error }));
    }
}
