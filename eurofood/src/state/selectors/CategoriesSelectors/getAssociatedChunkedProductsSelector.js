import createCachedSelector from 're-reselect';
import generateArrayChunk from '../../../helpers/generateArrayChunk';
import getAssociatedProductsSelector from './getAssociatedProductsSelector';

export default createCachedSelector(
    [getAssociatedProductsSelector, (_, id) => id],
    products => {
        if (products) return generateArrayChunk(products, 10);
        return [];
    }
)((_, id) => id);
