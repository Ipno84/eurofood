import createCachedSelector from 're-reselect';
import getCategoriesItemsSelector from './getCategoriesItemsSelector';
import getMainSectionsSelector from './getMainSectionsSelector';

export default createCachedSelector(
    [getCategoriesItemsSelector, getMainSectionsSelector, (_, id) => id],
    (items, mainSections, id) => {
        if (items && items[id]) {
            return items[id];
        } else if (mainSections && mainSections.length) {
            const foundItem = mainSections.find(
                e =>
                    e &&
                    typeof e === 'object' &&
                    parseInt(e.id) === parseInt(id)
            );
            if (foundItem) return foundItem;
        }
        return null;
    }
)((_, id) => id);
