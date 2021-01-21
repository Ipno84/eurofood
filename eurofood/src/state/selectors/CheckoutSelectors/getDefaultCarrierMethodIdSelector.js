import { createSelector } from 'reselect';
import getDefaultCarrierMethodSelector from './getDefaultCarrierMethodSelector';

export default createSelector(
    [getDefaultCarrierMethodSelector],
    defaultCarrierMethod =>
        defaultCarrierMethod ? defaultCarrierMethod.id : null
);
