import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getCurrentCartAssociationsCartRowsSelector from '../../state/selectors/CartSelectors/getCurrentCartAssociationsCartRowsSelector';
import getMissingProductsAction from '../../state/actions/ProductsActions/getMissingProductsAction';

export default function useCartRows() {
    const dispatch = useDispatch();
    const cartRows = useSelector(state =>
        getCurrentCartAssociationsCartRowsSelector(state)
    );
    const getMissingProducts = useCallback(
        ids => dispatch(getMissingProductsAction(ids)),
        [dispatch]
    );
    useEffect(() => {
        const ids = cartRows.map(e => e.id_product);
        if (ids && ids.length > 0) {
            getMissingProducts(ids);
        }
    }, [cartRows]);
    return cartRows;
}
