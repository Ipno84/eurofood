import { createSelector } from 'reselect';
import getPaymentMethodsSelector from './getPaymentMethodsSelector';

export default createSelector([getPaymentMethodsSelector], paymentMethods =>
    paymentMethods ? paymentMethods.filter(e => e.active) : []
);
