import getCategoriesCall from './getCategoriesCall';

const params = {
    sort: '[name_ASC]',
    display: 'full',
    'filter[id_parent]': '[2]',
    'filter[active]': '[1]'
};

export default function getMainSectionsCall() {
    params.canSetClientCache = true;
    return getCategoriesCall(params);
}
