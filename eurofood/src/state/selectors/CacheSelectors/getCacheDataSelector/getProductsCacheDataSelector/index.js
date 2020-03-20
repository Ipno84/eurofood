import { REDUCER_NAME_PRODUCTS } from './../../../../../constants/StoreConstants';
import { createSelector } from 'reselect';
import getCacheDataSelector from './../';

export default createSelector(
    [getCacheDataSelector],
    cache => cache[REDUCER_NAME_PRODUCTS]
);
