import { createSelector } from 'reselect';
import getCarriersSelector from './../CarriersSelectors/getCarriersSelector';
import getSelectedCarrierMethodIdSelector from './getSelectedCarrierMethodIdSelector';

export default createSelector(
    [getCarriersSelector, getSelectedCarrierMethodIdSelector],
    (carriers, selectedCarrierMethodId) => {
        const carrierMethod = carriers.find(
            e => Number(e.id) === Number(selectedCarrierMethodId)
        );
        return carrierMethod ? carrierMethod : null;
    }
);
