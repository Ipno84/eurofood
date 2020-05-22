import getCustomersCall from './getCustomersCall';

let params = {
    display: '[id]'
};

export default function checkUserByIdCall(id) {
    if (id)
        params = {
            ...params,
            'filter[id]': `[${id}]`
        };
    params = { ...params };
    return getCustomersCall(params);
}
