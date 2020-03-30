import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getOrderedOrdersSelector from './../../state/selectors/OrdersSelectors/getOrderedOrdersSelector';
import getOrdersAction from './../../state/actions/OrdersActions/getOrdersAction';
import isUserLoggedInSelector from './../../state/selectors/ClientSelectors/isUserLoggedInSelector';

export default function useOrders() {
    const dispatch = useDispatch();
    const isUserLoggedIn = useSelector(state => isUserLoggedInSelector(state));
    const orders = useSelector(state => getOrderedOrdersSelector(state));
    const getOrders = useCallback(() => dispatch(getOrdersAction()), [
        dispatch
    ]);
    // const missingIds = orders.filter(e => typeof e === 'number');
    useEffect(() => {
        if (isUserLoggedIn) getOrders();
    }, [isUserLoggedIn, getOrders]);
    return { orders };
}
