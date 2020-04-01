import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import generateArrayChunk from '../../helpers/generateArrayChunk';
import getAssociatedProductsSelector from '../../state/selectors/CategoriesSelectors/getAssociatedProductsSelector';
import getMissingProductsAction from '../../state/actions/ProductsActions/getMissingProductsAction';

export default function useGridCategoryProducts(id) {
    const dispatch = useDispatch();
    const getMissingProducts = useCallback(
        ids => dispatch(getMissingProductsAction(ids)),
        [dispatch]
    );

    const products = useSelector(state =>
        getAssociatedProductsSelector(state, id, 4)
    );
    useEffect(() => {
        const ids = products.filter(e => typeof e !== 'object');
        if (ids && ids.length) getMissingProducts(ids);
    }, [products, getMissingProducts]);
    return {
        productsChunks: generateArrayChunk(products, 2)
    };
}
