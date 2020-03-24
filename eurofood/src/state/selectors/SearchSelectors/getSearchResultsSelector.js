import { createSelector } from 'reselect';
import getProductsItemsSelector from './../ProductsSelectors/getProductsItemsSelector';
import getSearchResultsIdsSelector from './getSearchResultsIdsSelector';

export default createSelector(
    [getSearchResultsIdsSelector, getProductsItemsSelector],
    (resultsIds, products) => {
        if (!resultsIds) return [];
        return resultsIds.map(id =>
            products && products[id] ? products[id] : { id }
        );
    }
);
