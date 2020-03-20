import { createSelector } from 'reselect';
import getCategoriesCacheDataSelector from '.';

export default createSelector(
    [getCategoriesCacheDataSelector],
    categoriesCacheData => categoriesCacheData.mainSections
);
