import { createSelector } from 'reselect';
import getSearchSelectedCategorySelector from './getSearchSelectedCategorySelector';

export default createSelector([getSearchSelectedCategorySelector], category =>
    category ? category.name : null
);
