import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import generateArrayChunk from '../../helpers/generateArrayChunk';
import getAssociatedProductsSelector from '../../state/selectors/CategoriesSelectors/getAssociatedProductsSelector';
import getCategoryAction from '../../state/actions/CategoriesActions/getCategoryAction';
import isCategoryLoadingSelector from '../../state/selectors/CategoriesSelectors/isCategoryLoadingSelector';
import isTabletDevice from '../../helpers/isTabletDevice';

// import { isTablet } from 'react-native-device-detection';

export default function useGridCategoryProducts(id) {
    const dispatch = useDispatch();
    const getCategory = useCallback(() => dispatch(getCategoryAction({ id })), [
        dispatch
    ]);

    const products = useSelector(state =>
        getAssociatedProductsSelector(state, id, isTabletDevice() ? 8 : 4)
    );
    const isCategoryLoading = useSelector(state =>
        isCategoryLoadingSelector(state)
    );
    useEffect(() => {
        getCategory();
    }, [getCategory]);
    return {
        productsChunks: products
            ? generateArrayChunk(products, isTabletDevice() ? 4 : 2)
            : null,
        isCategoryLoading
    };
}
