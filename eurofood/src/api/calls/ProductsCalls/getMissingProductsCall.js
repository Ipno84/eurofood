import getProductsCall from './getProductsCall';

let params = {
    display: 'full'
};

export default function getMissingProductsCall(ids) {
    if (ids) params = { ...params, 'filter[id]': `[${ids.join('|')}]` };
    return getProductsCall(params);
}
