import { createSelector } from 'reselect';
import getUserIdSelector from './getUserIdSelector';
import isUserActiveSelector from './isUserActiveSelector';

export default createSelector(
    [getUserIdSelector, isUserActiveSelector],
    (id, isActive) => Boolean(id && isActive)
);
