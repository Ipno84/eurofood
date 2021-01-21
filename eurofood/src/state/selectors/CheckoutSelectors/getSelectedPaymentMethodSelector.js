import { createSelector } from 'reselect';
import getPaymentMethodsSelector from './../SettingsSelectors/getPaymentMethodsSelector';
import getSelectedPaymentMethodIdSelector from './getSelectedPaymentMethodIdSelector';

export default createSelector(
    [getPaymentMethodsSelector, getSelectedPaymentMethodIdSelector],
    (paymentMethods, selectedPaymentMethodId) => {
        const paymentMethod = paymentMethods.find(
            e => Number(e.id) === Number(selectedPaymentMethodId)
        );
        return paymentMethod ? paymentMethod : null;
    }
);
