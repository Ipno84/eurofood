import { createSelector } from 'reselect';
import getCurrentCartAssociationsCartRowsSelector from './getCurrentCartAssociationsCartRowsSelector';

export default createSelector(
    [getCurrentCartAssociationsCartRowsSelector],
    cartRows =>
        cartRows
            ? cartRows
                  .map(e => (e && typeof e === 'object' ? e.id_product : null))
                  .filter(e => e)
            : null
);
