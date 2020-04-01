import getAddressesCall from './getAddressesCall';

let params = {
    display: 'full',
    'filter[deleted]': '[0]'
};

export default function getCurrentUserAddressesCall(id_customer) {
    if (id_customer) {
        params = {
            ...params,
            'filter[id_customer]': `[${id_customer}]`
        };
    }
    return getAddressesCall(params);
}
