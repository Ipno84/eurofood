import { createSelector } from 'reselect';
import getSelectedCarrierMethodSelector from './getSelectedCarrierMethodSelector';

export default createSelector(
    [getSelectedCarrierMethodSelector],
    selectedCarrierMethod =>
        selectedCarrierMethod ? selectedCarrierMethod.delay : ''
);
