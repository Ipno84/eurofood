import { REDUCER_NAME_CATEGORIES } from './../../../../../constants/StoreConstants'
import { createSelector } from 'reselect';
import getCacheDataSelector from './../';

export default createSelector([getCacheDataSelector], (cache) => cache[REDUCER_NAME_CATEGORIES]);
