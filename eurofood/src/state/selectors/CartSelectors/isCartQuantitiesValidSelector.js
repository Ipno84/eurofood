import { createSelector } from 'reselect';
import getCurrentCartAssociationsCartRowsIdsSelector from './getCurrentCartAssociationsCartRowsIdsSelector';
import isCartItemQuantityMoreThansStockSelector from './isCartItemQuantityMoreThansStockSelector';

export default function isCartQuantitiesValidSelector(state) {
    const ids = getCurrentCartAssociationsCartRowsIdsSelector(state);
    const idsValidities = ids.map(e =>
        isCartItemQuantityMoreThansStockSelector(state, e)
    );
    return idsValidities.filter(e => e).length === 0;
}
