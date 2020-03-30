import getOrdersCall from './getOrdersCall';

let params = {
    display: 'full'
};

export default function getCurrentUserOrdersCall(id_customer) {
    if (id_customer)
        params = {
            ...params,
            'filter[id_customer]': `[${id_customer}]`
        };
    return getOrdersCall(params);
}
