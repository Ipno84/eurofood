import createCachedSelector from 're-reselect';
import getErrorSelector from './getErrorSelector';

export default createCachedSelector(
    [getErrorSelector, (_, key) => key],
    error => (error && error.message ? error.message : '')
)((_, key) => key);
