import { createSelector } from 'reselect';
import getCurrentCartSelector from './getCurrentCartSelector';

export default createSelector([getCurrentCartSelector], currentCart =>
    currentCart && currentCart.id ? currentCart.id : null
);
