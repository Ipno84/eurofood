import { createSelector } from 'reselect';
import getSelectedPaymentMethodSelector from './getSelectedPaymentMethodSelector';

export default createSelector(
    [getSelectedPaymentMethodSelector],
    selectedPaymentMethod =>
        selectedPaymentMethod ? selectedPaymentMethod.name : null
);
