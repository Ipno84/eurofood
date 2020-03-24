import { useDispatch, useSelector } from 'react-redux';

import getMissingProductsAction from '../../state/actions/ProductsActions/getMissingProductsAction';
import getProductItemSelector from '../../state/selectors/ProductsSelectors/getProductItemSelector';
import { useCallback } from 'react';

export default function useProduct(id) {
    const dispatch = useDispatch();
    const getMissingProducts = useCallback(
        () => dispatch(getMissingProductsAction([id])),
        [dispatch]
    );
    const product = useSelector(state => getProductItemSelector(state, id));
    if (!product) getMissingProducts();
    return product;
}
