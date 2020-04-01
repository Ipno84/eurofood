import getProductsItemsSelector from './getProductsItemsSelector';

export default function getMissingProductsSelector(state, ids) {
    const items = getProductsItemsSelector(state);
    const itemsIdsArray = Object.keys(items);
    const missingIds = ids.filter(e => !itemsIdsArray.includes(String(e)));
    return missingIds;
}
