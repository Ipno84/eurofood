import { createSelector } from 'reselect';
import getCurrentCartAssociationsSelector from './getCurrentCartAssociationsSelector';

export default createSelector(
    [getCurrentCartAssociationsSelector],
    associations =>
        associations && associations.cart_rows ? associations.cart_rows : null
);
