import createCachedSelector from 're-reselect';
import getCachedImagesUriSelector from './getCachedImagesUriSelector';

export default function getImageUriFromCachedImagesSelector(state, uri, id) {
    if (!id || !uri) return null;
    const cachedData = getCachedImagesUriSelector(state);
    if (cachedData[uri]) return cachedData[uri];
    return null;
}
