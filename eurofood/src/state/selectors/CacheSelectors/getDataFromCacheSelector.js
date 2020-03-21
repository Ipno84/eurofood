import createCachedSelector from 're-reselect';
import getCacheSelector from './getCacheSelector';

export default createCachedSelector(
    [getCacheSelector, (_, key) => key],
    (cachedData, key) => {
        return cachedData && cachedData[key] ? cachedData[key] : null;
    }
)((_, key) => key);
