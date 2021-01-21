import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Alert } from 'react-native';
import PlainButton from '../../atoms/Button/PlainButton';
import { ROUTE_NAME_BILLING_ADDRESS } from '../../../../constants/RouteConstants';
import getSelectedBillingAddressIdSelector from '../../../../state/selectors/CartSelectors/getSelectedBillingAddressIdSelector';
import getSelectedShippingAddressIdSelector from '../../../../state/selectors/CartSelectors/getSelectedShippingAddressIdSelector';
import isLoggedUserBusinessTypeSelector from './../../../../state/selectors/ClientSelectors/isLoggedUserBusinessTypeSelector';
import isOrderSubmittedSelector from '../../../../state/selectors/OrdersSelectors/isOrderSubmittedSelector';
import submitOrderAction from '../../../../state/actions/OrdersActions/submitOrderAction';
import useAppNavigation from '../../../../hooks/navigation/useAppNavigation';

const SubmitOrProceedButton = ({ isShippingAddressPage }) => {
    const dispatch = useDispatch();
    const { navigate } = useAppNavigation();

    const submitOrder = useCallback(() => dispatch(submitOrderAction()), [
        dispatch
    ]);

    const selectedShippingAddressId = useSelector(state =>
        getSelectedShippingAddressIdSelector(state)
    );
    const isLoggedUserBusinessType = useSelector(state =>
        isLoggedUserBusinessTypeSelector(state)
    );
    const isOrderSubmitted = useSelector(state =>
        isOrderSubmittedSelector(state)
    );
    const selectedBillingAddressId = useSelector(state =>
        getSelectedBillingAddressIdSelector(state)
    );
    if (!isLoggedUserBusinessType) {
        if (isShippingAddressPage) {
            return (
                <PlainButton
                    disabled={!Boolean(parseInt(selectedShippingAddressId))}
                    onPress={() =>
                        selectedShippingAddressId &&
                        navigate(ROUTE_NAME_BILLING_ADDRESS)
                    }>
                    Procedi
                </PlainButton>
            );
        }
        return (
            <PlainButton
                disabled={isOrderSubmitted}
                onPress={() => {
                    if (!isOrderSubmitted) {
                        if (!selectedBillingAddressId) {
                            Alert.alert(
                                'Attenzione',
                                `Non hai selezionato alcun indirizzo di fatturazione, sei sicuro di voler procedere con l'ordine?`,
                                [
                                    {
                                        text: 'Annulla',
                                        style: 'cancel'
                                    },
                                    {
                                        text: 'Procedi',
                                        onPress: () => submitOrder()
                                    }
                                ]
                            );
                        } else submitOrder();
                    }
                }}>
                Completa
            </PlainButton>
        );
    }
    return (
        <PlainButton
            disabled={!Boolean(parseInt(selectedShippingAddressId))}
            onPress={() => !isOrderSubmitted && submitOrder()}>
            Completa
        </PlainButton>
    );
};

export default SubmitOrProceedButton;
