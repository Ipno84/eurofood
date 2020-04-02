import { createSelector } from 'reselect';
import getCurrentCartAssociationsCartRowsSelector from './getCurrentCartAssociationsCartRowsSelector';

export default createSelector(
    [getCurrentCartAssociationsCartRowsSelector],
    cartRows => (cartRows ? cartRows.map(e => e.id_product) : null)
);
