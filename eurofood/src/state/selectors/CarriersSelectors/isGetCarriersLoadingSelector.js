import { createSelector } from 'reselect';
import getCarriersReducerSelector from './';

export default createSelector(
    [getCarriersReducerSelector],
    carriersReducer => carriersReducer.isCarriersLoading
);
