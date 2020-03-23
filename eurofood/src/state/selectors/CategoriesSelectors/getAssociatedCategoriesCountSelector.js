import createCachedSelector from 're-reselect';
import getAssociatedCategoriesIdsSelector from './getAssociatedCategoriesIdsSelector';

export default createCachedSelector(
    [getAssociatedCategoriesIdsSelector, (_, id) => id],
    categories => (categories ? categories.length : 0)
)((_, id) => id);
