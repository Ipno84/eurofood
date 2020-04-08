import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getAssociatedProductsSelector from '../../state/selectors/CategoriesSelectors/getAssociatedProductsSelector';
import getCategoryAction from '../../state/actions/CategoriesActions/getCategoryAction';
import isCategoryLoadingSelector from '../../state/selectors/CategoriesSelectors/isCategoryLoadingSelector';

export default function useCategoryProducts(id) {
    const dispatch = useDispatch();

    const getCategory = useCallback(() => dispatch(getCategoryAction({ id })), [
        dispatch
    ]);

    const products = useSelector(state =>
        getAssociatedProductsSelector(state, id)
    );
    const isCategoryLoading = useSelector(state =>
        isCategoryLoadingSelector(state)
    );
    const onProductsEndReached = () => {};
    useEffect(() => {
        getCategory();
    }, [getCategory]);
    return {
        products,
        onProductsEndReached,
        isCategoryLoading
    };
}
