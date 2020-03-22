import createCachedSelector from 're-reselect';
import getCategoriesItemsSelector from './getCategoriesItemsSelector';

export default createCachedSelector(
    [getCategoriesItemsSelector, (_, id) => id],
    (items, id) => {
        return items && id && items[id] ? items[id] : null;
    }
)((_, id) => id);
