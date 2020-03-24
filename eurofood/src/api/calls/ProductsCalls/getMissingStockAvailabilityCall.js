import getStockAvailabilityCall from './getStockAvailabilityCall';

let params = {
    display: '[id,id_product,quantity]'
};

export default function getMissingStockAvailabilityCall(ids) {
    if (ids)
        params = {
            ...params,
            'filter[id_product]': `[${ids.join('|')}]`
        };
    return getStockAvailabilityCall(params);
}
