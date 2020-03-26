import getProductsCall from './../ProductsCalls/getProductsCall';

let params = {
    sort: '[name_ASC]',
    display:
        '[id,name,link_rewrite,id_category_default,id_default_image,quantity,type,unit_price_ratio,reference,price,wholesale_price,description,description_short,active]'
};

export default function searchProductsCall({
    searchText,
    selectedCategoryId,
    offset = 0,
    limit = 10
}) {
    if (searchText) {
        params = {
            ...params,
            'filter[name]': `[${searchText}]%`
        };
    }
    if (selectedCategoryId) {
        params = {
            ...params,
            'filter[id_category_default]': `[${selectedCategoryId}]`
        };
    }

    params = { ...params, limit: `${offset},${limit}` };
    return getProductsCall(params);
}
