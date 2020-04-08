import {
    ENDPOINT_CATEGORIES,
    HOST,
    SUFFIX
} from './../../../constants/ApiConstants';

import axios from 'axios';
import parseCategories from './../../parsing/CategoriesParsings/parseCategories';

export default function getCategoriesCall(params = {}) {
    const endpoint = [HOST, SUFFIX, ENDPOINT_CATEGORIES].join('/');
    return axios
        .get(endpoint, { params })
        .then(({ data }) => {
            if (data && data.categories) {
                data = {
                    ...data,
                    categories: parseCategories(data.categories)
                };
            }
            return data;
        })
        .catch(error => {
            throw error;
        });
}
