import createCachedSelector from 're-reselect';
import getAddressFormSelector from './getAddressFormSelector';

export default createCachedSelector(
    [getAddressFormSelector, (_, key) => key],
    (addressForm, key) =>
        addressForm && addressForm[key] ? addressForm[key] : ''
)((_, key) => key);
