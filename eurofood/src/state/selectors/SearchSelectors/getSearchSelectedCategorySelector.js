import { createSelector } from 'reselect';
import getCategoriesItemsSelector from './../CategoriesSelectors/getCategoriesItemsSelector';
import getMainSectionsSelector from './../CategoriesSelectors/getMainSectionsSelector';
import getSearchSelectedCategoryIdSelector from './getSearchSelectedCategoryIdSelector';

export default createSelector(
    [
        getSearchSelectedCategoryIdSelector,
        getCategoriesItemsSelector,
        getMainSectionsSelector
    ],
    (selectedCategoryId, items, mainSections) => {
        if (selectedCategoryId && selectedCategoryId !== -1) {
            if (items && items[selectedCategoryId])
                return items[selectedCategoryId];
            if (mainSections && mainSections.length) {
                const category = mainSections.find(
                    e =>
                        e &&
                        typeof e === 'object' &&
                        e.id === selectedCategoryId
                );
                if (category) return category;
            }
        }
        return null;
    }
);
