import createCachedSelector from 're-reselect';
import generateArrayChunk from '../../../helpers/generateArrayChunk';
import getAssociatedCategoriesSelector from './getAssociatedCategoriesSelector';

export default createCachedSelector(
    [getAssociatedCategoriesSelector, (_, id) => id],
    categories => {
        if (categories) return generateArrayChunk(categories, 10);
        return [];
    }
)((_, id) => id);
