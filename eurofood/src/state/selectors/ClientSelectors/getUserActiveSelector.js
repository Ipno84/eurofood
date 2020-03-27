import { createSelector } from 'reselect';
import getUserSelector from './getUserSelector';

export default createSelector([getUserSelector], user =>
    user && user.active ? user.active : ''
);
