import { createSelector } from 'reselect';
import getCurrentCartSelector from './getCurrentCartSelector';

export default createSelector(
    [getCurrentCartSelector],
    currentCart => currentCart.id_address_delivery
);
