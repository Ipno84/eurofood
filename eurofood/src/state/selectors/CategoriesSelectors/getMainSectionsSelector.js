import { createSelector } from 'reselect';
import getCategoriesItemsSelector from './getCategoriesItemsSelector';
import getMainSectionsIdsSelector from './getMainSectionsIdsSelector';

export default createSelector(
    [getCategoriesItemsSelector, getMainSectionsIdsSelector],
    (items, mainSections) => {
        return mainSections.map(id => (items && items[id] ? items[id] : null));
    }
);
