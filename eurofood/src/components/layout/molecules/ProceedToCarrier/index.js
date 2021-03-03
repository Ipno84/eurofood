import {
    ROUTE_NAME_BILLING_ADDRESS,
    ROUTE_NAME_SHIPPING_METHOD
} from '../../../../constants/RouteConstants';

import { Alert } from 'react-native';
import PlainButton from '../../atoms/Button/PlainButton';
import React from 'react';
import getSelectedBillingAddressIdSelector from '../../../../state/selectors/CartSelectors/getSelectedBillingAddressIdSelector';
import getSelectedShippingAddressIdSelector from '../../../../state/selectors/CartSelectors/getSelectedShippingAddressIdSelector';
import isLoggedUserBusinessTypeSelector from './../../../../state/selectors/ClientSelectors/isLoggedUserBusinessTypeSelector';
import isCartLoadingSelector from './../../../../state/selectors/CartSelectors/isCartLoadingSelector';
import useAppNavigation from '../../../../hooks/navigation/useAppNavigation';
import { useSelector } from 'react-redux';

const ProceedToCarrier = ({ isShippingAddressPage }) => {
    const { navigate } = useAppNavigation();

    const selectedShippingAddressId = useSelector(state =>
        getSelectedShippingAddressIdSelector(state)
    );
    const isCartLoading = useSelector(state => isCartLoadingSelector(state));
    const isLoggedUserBusinessType = useSelector(state =>
        isLoggedUserBusinessTypeSelector(state)
    );
    const selectedBillingAddressId = useSelector(state =>
        getSelectedBillingAddressIdSelector(state)
    );
    if (!isLoggedUserBusinessType) {
        if (isShippingAddressPage) {
            return (
                <PlainButton
                    disabled={
                        !Boolean(parseInt(selectedShippingAddressId)) ||
                        isCartLoading
                    }
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
                onPress={() => {
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
                                    onPress: () =>
                                        navigate(ROUTE_NAME_SHIPPING_METHOD)
                                }
                            ]
                        );
                    } else navigate(ROUTE_NAME_SHIPPING_METHOD);
                }}>
                Procedi
            </PlainButton>
        );
    }
    return (
        <PlainButton
            disabled={
                !Boolean(parseInt(selectedShippingAddressId)) || isCartLoading
            }
            onPress={() => {
                if (
                    Boolean(parseInt(selectedShippingAddressId)) &&
                    !isCartLoading
                )
                    navigate(ROUTE_NAME_SHIPPING_METHOD);
            }}>
            Procedi
        </PlainButton>
    );
};

export default ProceedToCarrier;
