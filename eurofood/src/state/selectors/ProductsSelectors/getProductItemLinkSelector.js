import { HOST } from './../../../constants/ApiConstants';
import createCachedSelector from 're-reselect';
import getCategoryLinkRewriteSelector from './../CategoriesSelectors/getCategoryLinkRewriteSelector';
import getProductItemIdCategoryDefaultSelector from './getProductItemIdCategoryDefaultSelector';
import getProductItemLinkRewriteSelector from './getProductItemLinkRewriteSelector';

export default createCachedSelector(
    [
        getProductItemLinkRewriteSelector,
        getProductItemIdCategoryDefaultSelector,
        state => state,
        (_, id) => id
    ],
    (slug, categoryId, state, id) => {
        if (!categoryId || !slug) return null;
        const categoryLinkRewrite = getCategoryLinkRewriteSelector(
            state,
            categoryId
        );
        return `${HOST}/${categoryLinkRewrite}/${id}-${slug}.html`;
    }
)((_, id) => id);
