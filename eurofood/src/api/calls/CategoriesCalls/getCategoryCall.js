import {
    ENDPOINT_CATEGORIES,
    HOST,
    PREFIX,
    SUFFIX
} from './../../../constants/ApiConstants';

import axios from 'axios';
import parseCategory from './../../parsing/CategoriesParsings/parseCategory';
import parseProduct from '../../parsing/ProductsParsings/parseProduct';

export default async function getCategoryCall(
    id,
    params = { canSetClientCache: true }
) {
    const endpoint = [HOST, SUFFIX, PREFIX + ENDPOINT_CATEGORIES, id].join('/');
    try {
        const { data } = await axios.get(endpoint, { params });
        if (data && data.category) {
            data.category = parseCategory(data);
        }
        if (data && data.products) {
            data.products = data.products.map(product => parseProduct(product));
        }
        return data;
    } catch (error) {
        console.log('error', error);
        throw error;
    }
}
