import removeProductsFromCategoryAssociations from './removeProductsFromCategoryAssociations';

export default function parseCategories(categories) {
    if (categories) {
        return categories.map(category =>
            removeProductsFromCategoryAssociations(category)
        );
    }
    return catgories;
}
