import { createSelector } from 'reselect';
import getUserSelector from './getUserSelector';

export default createSelector([getUserSelector], user =>
    user && user.id_default_group ? user.id_default_group : ''
);
