import parseProduct from '../ProductsParsings/parseProduct';
import { product } from '../../../assets/images/placeholder';

export default function parseCategory(payload) {
    const category = payload.category;
    const products = payload.products;
    if (category && products) {
        return {
            ...category,
            name: category.name['1'],
            description: category.description['1'],
            link_rewrite: category.link_rewrite['1'],
            meta_title: category.meta_title['1'],
            meta_keywords: category.meta_keywords['1'],
            meta_description: category.meta_description['1'],
            associations: {
                products: products.map(product => parseProduct(product))
            }
        };
    }
    return payload;
}
