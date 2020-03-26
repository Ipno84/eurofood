import { createSelector } from 'reselect';
import getLoginFormSelector from './getLoginFormSelector';

export default createSelector(
    [getLoginFormSelector],
    loginForm => loginForm.password
);
