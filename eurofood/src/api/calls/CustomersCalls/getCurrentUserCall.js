import getCustomerCall from './getCustomerCall';

let params = {
    display: '[id,lastname,firstname,email,active]'
};

export default function getMissingPricesCall(id, ids) {
    if (ids)
        params = {
            ...params,
            'filter[id_product]': `[${ids.join('|')}]`
        };
    return getCustomerCall(id, params);
}
