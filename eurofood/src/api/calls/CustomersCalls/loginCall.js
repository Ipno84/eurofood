import {
    ENDPOINT_LOGIN,
    HOST,
    SUFFIX
} from './../../../constants/ApiConstants';

import axios from 'axios';

export default function loginCall(body) {
    const endpoint = [HOST, SUFFIX, ENDPOINT_LOGIN].join('/');
    let params = new URLSearchParams();
    Object.keys(body).forEach(key => {
        params.append(key, body[key]);
    });
    return axios
        .post(endpoint, params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        });
}
