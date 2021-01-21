import getCustomersCall from './getCustomersCall';

let params = {
    display: '[id]'
};

export default function checkUserCall(email) {
    if (email)
        params = {
            ...params,
            'filter[email]': `[${email}]`
        };
    params = { ...params };
    return getCustomersCall(params);
}
