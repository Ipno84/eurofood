import getProductsCall from './../ProductsCalls/getProductsCall';

export default function searchProductsCall(payload) {
    const searchText = payload.searchText || '';
    const selectedCategoryId = payload.selectedCategoryId;
    const offset = payload.offset || 0;
    const limit = payload.limit || 10;
    let params = {
        sort: '[name_ASC]',
        'filter[active]': '[1]',
        display:
            '[id,name,link_rewrite,id_category_default,id_default_image,quantity,type,unit_price_ratio,reference,price,wholesale_price,description,description_short,active]'
    };
    if (searchText) {
        params['filter[name]'] = `[${searchText}]%`;
    }
    if (selectedCategoryId) {
        params['filter[id_category_default]'] = `[${selectedCategoryId}]`;
    }
    if (limit && !offset) {
        params['limit'] = limit;
    } else if (limit && offset) {
        params['limit'] = `${offset},${limit}`;
    }
    params.canSetClientCache = true;
    return getProductsCall(params);
}
