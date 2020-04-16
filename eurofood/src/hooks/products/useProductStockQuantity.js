import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getMissingStockAvailabilityAction from './../../state/actions/ProductsActions/getMissingStockAvailabilityAction';
import getProductStockAvailabilitySelector from './../../state/selectors/ProductsSelectors/getProductStockAvailabilitySelector';
import getProductStockQuantitySelector from './../../state/selectors/ProductsSelectors/getProductStockQuantitySelector';

export default function useProductStockQuantity(id) {
    const dispatch = useDispatch();
    const getMissingStockAvailability = useCallback(
        () => dispatch(getMissingStockAvailabilityAction([id])),
        [dispatch]
    );
    const quantity = useSelector(state =>
        getProductStockQuantitySelector(state, id)
    );
    const stockAvailability = useSelector(state =>
        getProductStockAvailabilitySelector(state, id)
    );
    useEffect(() => {
        if (stockAvailability === null) getMissingStockAvailability();
    }, [stockAvailability]);
    return quantity;
}
