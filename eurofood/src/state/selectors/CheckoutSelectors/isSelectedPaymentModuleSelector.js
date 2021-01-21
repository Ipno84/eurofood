import createCachedSelector from 're-reselect';
import getSelectedPaymentMethodModuleSelector from './getSelectedPaymentMethodModuleSelector';

export default createCachedSelector(
    [
        getSelectedPaymentMethodModuleSelector,
        (_, currentModule) => currentModule
    ],
    (selectedPaymentMethodModule, currentModule) =>
        selectedPaymentMethodModule === currentModule
)((_, currentModule) => currentModule);
