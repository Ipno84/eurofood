import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import hasUserBillingAddressSelector from '../state/selectors/ClientSelectors/hasUserBillingAddressSelector';
import isLoggedUserBusinessTypeSelector from '../state/selectors/ClientSelectors/isLoggedUserBusinessTypeSelector';
import setHasToCompleteBusinessRegistrationAction from '../state/actions/ClientActions/setHasToCompleteBusinessRegistrationAction';

export default function useHasToCompleteBusinessRegistration() {
    const dispatch = useDispatch();
    const isLoggedUserBusinessType = useSelector(state =>
        isLoggedUserBusinessTypeSelector(state)
    );
    const hasUserBillingAddress = useSelector(state =>
        hasUserBillingAddressSelector(state)
    );
    const setHasToCompleteBusinessRegistration = useCallback(
        () =>
            dispatch(
                setHasToCompleteBusinessRegistrationAction(
                    isLoggedUserBusinessType && !hasUserBillingAddress
                )
            ),
        [dispatch, isLoggedUserBusinessType, hasUserBillingAddress]
    );
    /*
    const setHasToCompleteBusinessRegistration = useCallback(
        () => dispatch(setHasToCompleteBusinessRegistrationAction(true)),
        [dispatch, isLoggedUserBusinessType, hasUserBillingAddress]
    );
    */
    useEffect(() => {
        setHasToCompleteBusinessRegistration();
    }, [
        setHasToCompleteBusinessRegistration,
        isLoggedUserBusinessType,
        hasUserBillingAddress
    ]);
}
