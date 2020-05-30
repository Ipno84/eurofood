import createCachedSelector from 're-reselect';
import getProductImagesSelector from './getProductImagesSelector';

export default createCachedSelector(
    [getProductImagesSelector, (_, id) => id],
    (images, id) => {
        if (!images || (images && !images[id])) return null;
        return images && images[id];
    }
)((_, id) => id);
