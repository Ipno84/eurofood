import { Alert, View } from 'react-native';
import {
    ROUTE_NAME_EDIT_ADDRESS,
    ROUTE_NAME_PROFILE
} from './../../../../../constants/RouteConstants';
import React, { useCallback } from 'react';
import styled, { css } from 'styled-components/native';

import AddressItemWrapper from './AddressItemWrapper';
import ItemInner from './ItemInner';
import Touchable from './../../Button/Touchable';
import deleteAddressAction from './../../../../../state/actions/AddressesActions/deleteAddressAction';
import editAddressAction from './../../../../../state/actions/AddressesActions/editAddressAction';
import useAppNavigation from './../../../../../hooks/navigation/useAppNavigation';
import { useDispatch } from 'react-redux';
import { useRoute } from '@react-navigation/native';

const ItemOuter = ({ item, isSelected }) => {
    const route = useRoute();
    const { navigate } = useAppNavigation();
    const dispatch = useDispatch();
    const editAddress = useCallback(() => dispatch(editAddressAction(item)), [
        dispatch
    ]);
    const deleteAddress = useCallback(
        () => dispatch(deleteAddressAction({ id: item.id })),
        [dispatch]
    );
    return (
        <AddressItemWrapper isSelected={isSelected}>
            <ItemInner item={item} />
            <Footer>
                <Separator />
                <View style={{ flex: 1 }}>
                    <Touchable
                        onPress={() => {
                            editAddress();
                            if (route && route.name === ROUTE_NAME_PROFILE) {
                                navigate(ROUTE_NAME_EDIT_ADDRESS);
                            }
                        }}>
                        <ButtonWrapper isFirst={true}>
                            <ButtonText>Modifica</ButtonText>
                        </ButtonWrapper>
                    </Touchable>
                </View>
                <View style={{ flex: 1 }}>
                    <Touchable
                        onPress={() => {
                            Alert.alert(
                                'Attenzione',
                                `Sei sicuro di voler rimuovre quest'indirizzo?`,
                                [
                                    {
                                        text: 'No, annulla',
                                        style: 'cancel'
                                    },
                                    {
                                        text: 'Si, procedi',
                                        onPress: () => deleteAddress()
                                    }
                                ]
                            );
                        }}>
                        <ButtonWrapper>
                            <ButtonText>Elimina</ButtonText>
                        </ButtonWrapper>
                    </Touchable>
                </View>
            </Footer>
        </AddressItemWrapper>
    );
};

export default ItemOuter;

const Footer = styled.View`
    flex-direction: row;
    margin-left: -16px;
    margin-right: -16px;
    margin-bottom: -4px;
    flex: 1;
    height: 56px;
`;

const ButtonWrapper = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 9px;
    overflow: hidden;
    ${({ isFirst }) =>
        isFirst &&
        css`
            border-right-color: ${({ theme }) => theme.colors.alterGray(1)};
            border-right-width: 1px;
        `}
`;

const ButtonText = styled.Text`
    color: ${({ theme }) => theme.colors.orange(1)};
    padding-top: 10px;
    padding-bottom: 10px;
`;

const Separator = styled.View`
    height: 1px;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.alterGray(1)};
    left: 0;
    right: 0;
    top: 8px;
`;
