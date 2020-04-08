import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import generateArrayChunk from '../../helpers/generateArrayChunk';
import getAssociatedProductsSelector from '../../state/selectors/CategoriesSelectors/getAssociatedProductsSelector';
import getCategoryAction from '../../state/actions/CategoriesActions/getCategoryAction';
import isCategoryLoadingSelector from '../../state/selectors/CategoriesSelectors/isCategoryLoadingSelector';

export default function useGridCategoryProducts(id) {
    const dispatch = useDispatch();
    const getCategory = useCallback(() => dispatch(getCategoryAction({ id })), [
        dispatch
    ]);

    const products = useSelector(state =>
        getAssociatedProductsSelector(state, id, 4)
    );
    const isCategoryLoading = useSelector(state =>
        isCategoryLoadingSelector(state)
    );
    useEffect(() => {
        getCategory();
    }, [getCategory]);
    return {
        productsChunks: products ? generateArrayChunk(products, 2) : null,
        isCategoryLoading
    };
}
