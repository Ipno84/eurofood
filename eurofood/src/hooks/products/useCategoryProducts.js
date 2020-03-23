import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getAssociatedChunkedProductsSelector from '../../state/selectors/CategoriesSelectors/getAssociatedChunkedProductsSelector';
import getAssociatedProductsCountSelector from '../../state/selectors/CategoriesSelectors/getAssociatedProductsCountSelector';
import getMissingProductsAction from '../../state/actions/ProductsActions/getMissingProductsAction';

export default function useCategoryProducts(id, chunkCount = 0) {
    const dispatch = useDispatch();
    const getMissingProducts = useCallback(
        ids => dispatch(getMissingProductsAction(ids)),
        [dispatch]
    );

    const [count, setCount] = useState(chunkCount);
    const products = useSelector(state =>
        getAssociatedChunkedProductsSelector(state, id)
    );
    const productsCount = useSelector(state =>
        getAssociatedProductsCountSelector(state, id)
    );
    const currentChunk = products[count];
    const previousProducts = products
        .slice(0, count + 1)
        .flat()
        .filter(e => typeof e === 'object');
    const currentChunkMissing = currentChunk
        ? currentChunk.filter(e => typeof e !== 'object')
        : [];
    if (currentChunkMissing.length !== 0)
        getMissingProducts(currentChunkMissing);
    const isProductsChunking = productsCount !== previousProducts.length;
    const onProductsEndReached = () => {
        if (currentChunkMissing.length === 0) {
            setCount(count + 1);
        }
    };
    return {
        products: previousProducts,
        onProductsEndReached,
        isProductsChunking
    };
}
