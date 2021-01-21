import { createSelector } from 'reselect';
import getCarrierMethodsSelector from './../SettingsSelectors/getCarrierMethodsSelector';
import getSelectedCarrierMethodIdSelector from './getSelectedCarrierMethodIdSelector';

export default createSelector(
    [getCarrierMethodsSelector, getSelectedCarrierMethodIdSelector],
    (carrierMethods, selectedCarrierMethodId) => {
        const carrierMethod = carrierMethods.find(
            e => Number(e.id) === Number(selectedCarrierMethodId)
        );
        return carrierMethod ? carrierMethod : null;
    }
);
