import { createSelector } from 'reselect';
import getUserSelector from './getUserSelector';

export default createSelector([getUserSelector], user =>
    user && user.billing_address_id ? user.billing_address_id : ''
);
