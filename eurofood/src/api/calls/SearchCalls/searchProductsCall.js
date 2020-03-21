import getProductsCall from './../ProductsCalls/getProductsCall';

let params = {
    sort: '[name_ASC]',
    display: 'full',
    limit: 2
};

export default function searchProductsCall({ searchText, selectedCategoryId }) {
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
    return getProductsCall(params);
}
