import { createSelector } from 'reselect';
import getAddressFormSelector from './getAddressFormSelector';

export default createSelector(
    [getAddressFormSelector],
    addressForm => addressForm.alias
);
