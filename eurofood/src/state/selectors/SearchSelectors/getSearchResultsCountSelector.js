import { createSelector } from 'reselect';
import getSearchResultsIdsSelector from './getSearchResultsIdsSelector';

export default createSelector([getSearchResultsIdsSelector], resultsIds =>
    resultsIds ? resultsIds.length : 0
);
