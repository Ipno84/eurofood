import getCacheSelector from './getCacheSelector';
import getServerSettingsClientCacheDurationSelector from './../SettingsSelectors/getServerSettingsClientCacheDurationSelector';

export default function getValidDataFromCacheSelector(state, key) {
    if (!key) return null;
    const cache = getCacheSelector(state);
    const cacheDuration = getServerSettingsClientCacheDurationSelector(state);
    const maxExpirationTime = Math.floor(Date.now() / 1000 - cacheDuration);
    const cachedData = cache[key];
    if (cachedData && cachedData.date) {
        if (maxExpirationTime >= cachedData.date) return null;
        return cachedData.data;
    }
    return null;
}
