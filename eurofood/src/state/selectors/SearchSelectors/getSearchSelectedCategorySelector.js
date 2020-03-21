import { createSelector } from 'reselect';
import getCategoriesItemsSelector from './../CategoriesSelectors/getCategoriesItemsSelector';
import getSearchSelectedCategoryIdSelector from './getSearchSelectedCategoryIdSelector';

export default createSelector(
    [getSearchSelectedCategoryIdSelector, getCategoriesItemsSelector],
    (selectedCategoryId, items) =>
        selectedCategoryId && items && items[selectedCategoryId]
            ? items[selectedCategoryId]
            : null
);
