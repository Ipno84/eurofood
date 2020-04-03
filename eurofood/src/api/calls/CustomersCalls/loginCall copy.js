import getCustomersCall from './getCustomersCall';

let params = {
    display: '[id,lastname,firstname,email,active]'
};

export default function loginCall(email, password) {
    if (email)
        params = {
            ...params,
            'filter[email]': `[${email}]`
        };
    params = { ...params, clientCache: true };
    return getCustomersCall(params);
}
