import {
  BASIC_PARAMS,
  HOST,
  ENDPOINT_PRODUCTS
} from '../../constants/ApiConstants';

import axios from 'axios';

export default function getProducts(productIds) {
  const endpoint = [HOST, ENDPOINT_PRODUCTS].join('/');
  const product = productIds.join('|');
  const params = {
    display: 'full',
    filter: [
      { id: '[' + product + ']' }
    ]
  };
  return axios
    .get(endpoint, {
      params: params,
    })
    .then(({ data }) => data)
    .catch(error => {
      throw error;
    });
}