import createCachedSelector from 're-reselect';
import getAssociatedCategoriesIdsSelector from './getAssociatedCategoriesIdsSelector';
import getCategoriesItemsSelector from './getCategoriesItemsSelector';

export default createCachedSelector(
    [
        getAssociatedCategoriesIdsSelector,
        getCategoriesItemsSelector,
        (_, id) => id
    ],
    (categoriesIds, items) => {
        if (categoriesIds) {
            return categoriesIds.map(e => (items && items[e] ? items[e] : e));
        }
        return [];
    }
)((_, id) => id);
