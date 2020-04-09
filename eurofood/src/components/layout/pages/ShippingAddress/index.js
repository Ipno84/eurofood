import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddressForm from './../../organisms/AddressForm';
import AddressesList from './../../organisms/AddressesList';
import PlainButton from './../../atoms/Button/PlainButton';
import { ROUTE_NAME_BILLING_ADDRESS } from '../../../../constants/RouteConstants';
import SectionTitle from './../../atoms/Text/SectionTitle';
import TitleWrapper from './../../atoms/Text/TitleWrapper';
import ToggleAddressButton from './../../molecules/ToggleAddressButton';
import getSelectedShippingAddressIdSelector from './../../../../state/selectors/CartSelectors/getSelectedShippingAddressIdSelector';
import isShippingAddressFormVisibileSelector from './../../../../state/selectors/CartSelectors/isShippingAddressFormVisibileSelector';
import setSelectedShippingAddressIdAction from './../../../../state/actions/CartActions/setSelectedShippingAddressIdAction';
import showShippingAddressFormAction from './../../../../state/actions/CartActions/showShippingAddressFormAction';
import useAppNavigation from '../../../../hooks/navigation/useAppNavigation';

const ShippingAddress = () => {
    const { navigate } = useAppNavigation();
    const dispatch = useDispatch();
    const setSelectedShippingAddressId = useCallback(
        id => dispatch(setSelectedShippingAddressIdAction(id)),
        [dispatch]
    );
    const toggleShippingAddressForm = useCallback(
        () => dispatch(showShippingAddressFormAction()),
        [dispatch]
    );
    const selectedShippingAddressId = useSelector(state =>
        getSelectedShippingAddressIdSelector(state)
    );
    const isShippingAddressFormVisibile = useSelector(state =>
        isShippingAddressFormVisibileSelector(state)
    );
    return (
        <>
            <TitleWrapper>
                <SectionTitle bigger={true}>
                    Indirizzo di spedizione
                </SectionTitle>
            </TitleWrapper>
            {isShippingAddressFormVisibile ? (
                <AddressForm
                    toggleButton={() => (
                        <ToggleAddressButton
                            onPress={() => toggleShippingAddressForm()}>
                            Scegli indirizzo
                        </ToggleAddressButton>
                    )}
                />
            ) : (
                <>
                    <AddressesList
                        toggleButton={() => (
                            <ToggleAddressButton
                                onPress={() => toggleShippingAddressForm()}>
                                Nuovo indirizzo
                            </ToggleAddressButton>
                        )}
                        onPressAddress={id => setSelectedShippingAddressId(id)}
                        selectedId={Number(selectedShippingAddressId)}
                    />
                    <PlainButton
                        disabled={!Boolean(parseInt(selectedShippingAddressId))}
                        onPress={() =>
                            selectedShippingAddressId &&
                            navigate(ROUTE_NAME_BILLING_ADDRESS)
                        }>
                        Procedi
                    </PlainButton>
                </>
            )}
        </>
    );
};

export default ShippingAddress;
