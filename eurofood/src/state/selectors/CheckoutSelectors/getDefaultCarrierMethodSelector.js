import { createSelector } from 'reselect';
import getCarriersSelector from './../CarriersSelectors/getCarriersSelector';

export default createSelector([getCarriersSelector], carriers => {
    const carrier = carriers.find(e => e.is_default);
    return carrier ? carrier : null;
});
