import { createSelector } from 'reselect';
import getCartItemsSelector from './getCartItemsSelector';

export default createSelector([getCartItemsSelector], items =>
    Object.values(items).reduce((total, num) => {
        return parseInt(total) + parseInt(num);
    }, 0)
);
