import createCachedSelector from 're-reselect';
import getProductsImagesSelector from './getProductsImagesSelector';

export default createCachedSelector(
    [getProductsImagesSelector, (_, id) => id],
    images => {
        return images && images[id] ? images[id] : [];
    }
)((_, id) => id);
