export default function removeProductsFromCategoryAssociations(category) {
    if (category && category.associations && category.associations.products) {
        const { products, ...restAssociations } = category.associations;
        return {
            ...category,
            associations: { ...restAssociations, products: [] }
        };
    }
    return category;
}
