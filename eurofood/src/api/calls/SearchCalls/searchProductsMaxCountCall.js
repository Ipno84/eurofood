import getProductsCall from './../ProductsCalls/getProductsCall';

export default function searchProductsMaxCountCall(payload) {
    const searchText = payload.searchText || '';
    const selectedCategoryId = payload.selectedCategoryId;
    let params = {
        display: '[id]',
        'filter[active]': '[1]'
    };
    if (searchText) {
        params['filter[name]'] = `[${searchText}]%`;
    }
    if (selectedCategoryId) {
        params['filter[id_category_default]'] = `[${selectedCategoryId}]`;
    }
    params.canSetClientCache = true;

    return getProductsCall(params);
}
