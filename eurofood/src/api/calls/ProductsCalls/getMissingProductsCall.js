import getProductsCall from './getProductsCall';

let params = {
    display:
        '[id,name,id_category_default,link_rewrite,id_default_image,quantity,type,unit_price_ratio,reference,price,wholesale_price,description,description_short,active]'
};

export default function getMissingProductsCall(ids) {
    if (ids) params = { ...params, 'filter[id]': `[${ids.join('|')}]` };
    params.canSetClientCache = true;
    return getProductsCall(params);
}
