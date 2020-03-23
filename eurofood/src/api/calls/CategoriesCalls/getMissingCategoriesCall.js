import getCategoriesCall from './getCategoriesCall';

let params = {
    display: 'full',
    'filter[active]': '[1]'
};

export default function getMissingCategoriesCall(ids) {
    if (ids) params = { ...params, 'filter[id]': `[${ids.join('|')}]` };
    return getCategoriesCall(params);
}
