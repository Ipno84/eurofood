import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddressForm from './../../organisms/AddressForm';
import AddressesList from './../../organisms/AddressesList';
import ProceedToCarrier from '../../molecules/ProceedToCarrier';
import { SafeAreaView } from 'react-native';
import SectionTitle from './../../atoms/Text/SectionTitle';
import TitleWrapper from './../../atoms/Text/TitleWrapper';
import ToggleAddressButton from './../../molecules/ToggleAddressButton';
import getSelectedShippingAddressIdSelector from './../../../../state/selectors/CartSelectors/getSelectedShippingAddressIdSelector';
import isShippingAddressFormVisibileSelector from './../../../../state/selectors/CartSelectors/isShippingAddressFormVisibileSelector';
import setSelectedShippingAddressIdAction from './../../../../state/actions/CartActions/setSelectedShippingAddressIdAction';
import showShippingAddressFormAction from './../../../../state/actions/CartActions/showShippingAddressFormAction';
import styled from 'styled-components/native';

const ShippingAddress = () => {
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
        <SafeAreaView>
            <Wrap>
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
                            onPressAddress={id =>
                                setSelectedShippingAddressId(id)
                            }
                            selectedId={Number(selectedShippingAddressId)}
                        />
                        <ProceedToCarrier isShippingAddressPage={true} />
                    </>
                )}
            </Wrap>
        </SafeAreaView>
    );
};

export default ShippingAddress;

const Wrap = styled.View`
    height: 100%;
`;
