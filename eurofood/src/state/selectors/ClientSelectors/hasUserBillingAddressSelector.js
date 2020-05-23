import { createSelector } from 'reselect';
import getUserBillingAddressIdSelector from './getUserBillingAddressIdSelector';

export default createSelector(
    [getUserBillingAddressIdSelector],
    billingAddress => Boolean(billingAddress)
);
