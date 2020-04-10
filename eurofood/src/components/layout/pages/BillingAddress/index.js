import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddressForm from './../../organisms/AddressForm';
import AddressesList from './../../organisms/AddressesList';
import { Alert } from 'react-native';
import PlainButton from './../../atoms/Button/PlainButton';
import { SafeAreaView } from 'react-native';
import SectionTitle from './../../atoms/Text/SectionTitle';
import TitleWrapper from './../../atoms/Text/TitleWrapper';
import ToggleAddressButton from './../../molecules/ToggleAddressButton';
import getSelectedBillingAddressIdSelector from './../../../../state/selectors/CartSelectors/getSelectedBillingAddressIdSelector';
import isBillingAddressFormVisibileSelector from './../../../../state/selectors/CartSelectors/isBillingAddressFormVisibileSelector';
import isOrderSubmittedSelector from './../../../../state/selectors/OrdersSelectors/isOrderSubmittedSelector';
import setSelectedBillingAddressIdAction from './../../../../state/actions/CartActions/setSelectedBillingAddressIdAction';
import showBillingAddressFormAction from './../../../../state/actions/CartActions/showBillingAddressFormAction';
import styled from 'styled-components/native';
import submitOrderAction from './../../../../state/actions/OrdersActions/submitOrderAction';

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
    const submitOrder = useCallback(() => dispatch(submitOrderAction()), [
        dispatch
    ]);
    const isOrderSubmitted = useSelector(state =>
        isOrderSubmittedSelector(state)
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
