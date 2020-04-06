import getSpecificPricesCall from './getSpecificPricesCall';

let params = {
    display: '[id,id_product,reduction,reduction_type]'
};

export default function getMissingPricesCall(ids) {
    if (ids)
        params = {
            ...params,
            'filter[id_product]': `[${ids.join('|')}]`
        };
    params.canSetClientCache = true;
    return getSpecificPricesCall(params);
}
