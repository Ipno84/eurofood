import {
  BASIC_PARAMS,
  ENDPOINT_CATEGORIES,
  HOST
} from '../../constants/ApiConstants';

import axios from 'axios';

export default function getProductsByCategory(categoryId) {
  const endpoint = [HOST, ENDPOINT_CATEGORIES, categoryId].join('/');
  return axios
    .get(endpoint)
    .then(({ data }) => data)
    .catch(error => {
      throw error;
    });
}