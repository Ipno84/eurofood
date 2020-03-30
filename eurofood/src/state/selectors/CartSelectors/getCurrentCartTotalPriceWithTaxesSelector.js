import { createSelector } from 'reselect';
import getCurrentCartTotalPriceSelector from './getCurrentCartTotalPriceSelector';

export default createSelector([getCurrentCartTotalPriceSelector], total => {
    if (!total) return 0;
    const taxPercentage = 10;
    const tax = (total * taxPercentage) / 100;
    return total + tax;
});
