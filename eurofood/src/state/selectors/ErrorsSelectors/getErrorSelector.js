import createCachedSelector from 're-reselect';
import getErrorsSelector from './getErrorsSelector';

export default createCachedSelector(
    [getErrorsSelector, (_, key) => key],
    (errors, key) => (errors && errors[key] ? errors[key] : null)
)((_, key) => key);
