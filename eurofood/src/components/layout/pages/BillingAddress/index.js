import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddressForm from './../../organisms/AddressForm';
import AddressesList from './../../organisms/AddressesList';
import ProceedToCarrier from '../../molecules/ProceedToCarrier';
import { SafeAreaView } from 'react-native';
import SectionTitle from './../../atoms/Text/SectionTitle';
import TitleWrapper from './../../atoms/Text/TitleWrapper';
import ToggleAddressButton from './../../molecules/ToggleAddressButton';
import getSelectedBillingAddressIdSelector from './../../../../state/selectors/CartSelectors/getSelectedBillingAddressIdSelector';
import isBillingAddressFormVisibileSelector from './../../../../state/selectors/CartSelectors/isBillingAddressFormVisibileSelector';
import setSelectedBillingAddressIdAction from './../../../../state/actions/CartActions/setSelectedBillingAddressIdAction';
import showBillingAddressFormAction from './../../../../state/actions/CartActions/showBillingAddressFormAction';
import styled from 'styled-components/native';

const BillingAddress = () => {
    const dispatch = useDispatch();
    const setSelectedBillingAddressId = useCallback(
        id => dispatch(setSelectedBillingAddressIdAction(id)),
        [dispatch]
    );
    const toggleBillingAddressForm = useCallback(
        () => dispatch(showBillingAddressFormAction()),
        [dispatch]
    );
    const selectedBillingAddressId = useSelector(state =>
        getSelectedBillingAddressIdSelector(state)
    );
    const isBillingAddressFormVisibile = useSelector(state =>
        isBillingAddressFormVisibileSelector(state)
    );
    return (
        <SafeAreaView>
            <Wrap>
                <TitleWrapper>
                    <SectionTitle bigger={true}>
                        Indirizzo di fatturazione
                    </SectionTitle>
                </TitleWrapper>
                {isBillingAddressFormVisibile ? (
                    <AddressForm
                        toggleButton={() => (
                            <ToggleAddressButton
                                onPress={() => toggleBillingAddressForm()}>
                                Scegli indirizzo
                            </ToggleAddressButton>
                        )}
                    />
                ) : (
                    <>
                        <AddressesList
                            toggleButton={() => (
                                <ToggleAddressButton
                                    onPress={() => toggleBillingAddressForm()}>
                                    Nuovo indirizzo
                                </ToggleAddressButton>
                            )}
                            onPressAddress={id =>
                                setSelectedBillingAddressId(id)
                            }
                            selectedId={Number(selectedBillingAddressId)}
                        />
                        <ProceedToCarrier />
                    </>
                )}
            </Wrap>
        </SafeAreaView>
    );
};

export default BillingAddress;

const Wrap = styled.View`
    height: 100%;
`;
