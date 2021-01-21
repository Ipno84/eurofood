import { createSelector } from 'reselect';
import getCarrierMethodsSelector from './../SettingsSelectors/getCarrierMethodsSelector';

export default createSelector([getCarrierMethodsSelector], carrierMethods => {
    const carrierMethod = carrierMethods.find(e => e.is_default);
    return carrierMethod ? carrierMethod : null;
});
