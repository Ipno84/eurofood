import { createSelector } from 'reselect';
import getJwtTokenSelector from './getJwtTokenSelector';
import getUserIdSelector from './getUserIdSelector';

export default createSelector(
    [getUserIdSelector, getJwtTokenSelector],
    (id, jwt) => Boolean(id && jwt)
);
