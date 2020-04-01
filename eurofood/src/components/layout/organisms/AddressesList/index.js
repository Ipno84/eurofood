import {
    CountryList,
    StateList
} from './../../../../constants/AddressConstants';
import React, { useCallback, useEffect } from 'react';
import styled, { css } from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';

import { FlatList } from 'react-native';
import Wrapper from './../../atoms/Card/Wrapper';
import getAddressesSelector from './../../../../state/selectors/AddressesSelectors/getAddressesSelector';
import getCurrentUserAddressAction from './../../../../state/actions/AddressesActions/getCurrentUserAddressAction';

const AddressesList = ({ toggleButton }) => {
    const dispatch = useDispatch();
    const getCurrentUserAddress = useCallback(
        () => dispatch(getCurrentUserAddressAction()),
        [dispatch]
    );
    useEffect(() => {
        getCurrentUserAddress();
    }, [getCurrentUserAddress]);
    const addresses = useSelector(state => getAddressesSelector(state));
    return (
        <FlatList
            ListFooterComponent={() => toggleButton()}
            contentContainerStyle={{ paddingVertical: 8 }}
            data={addresses}
            renderItem={({ item }) => {
                if (!item) return null;
                return <AddressItem item={item} />;
            }}
            keyExtractor={(item, index) =>
                item && item.id ? String(item.id) : String(index)
            }
        />
    );
};

export default AddressesList;

const AddressItem = ({ item }) => {
    return (
        <AddressItemWrapper>
            <Title>{item.alias}</Title>
            <InfoText>
                <InfoText bold={true}>Nome</InfoText>
                <InfoText>: {item.firstname}</InfoText>
            </InfoText>
            <InfoText>
                <InfoText bold={true}>Cognome</InfoText>
                <InfoText>: {item.lastname}</InfoText>
            </InfoText>
            <InfoText>
                <InfoText bold={true}>Axienda</InfoText>
                <InfoText>: {item.company}</InfoText>
            </InfoText>
            <InfoText>
                <InfoText bold={true}>Numero P.IVA</InfoText>
                <InfoText>: {item.vat_number}</InfoText>
            </InfoText>
            <InfoText>
                <InfoText bold={true}>Indirizzo</InfoText>
                <InfoText>: {item.address1}</InfoText>
            </InfoText>
            <InfoText>
                <InfoText bold={true}>Completamento indirizzo</InfoText>
                <InfoText>: {item.address2}</InfoText>
            </InfoText>
            <InfoText>
                <InfoText bold={true}>CAP</InfoText>
                <InfoText>: {item.postcode}</InfoText>
            </InfoText>
            <InfoText>
                <InfoText bold={true}>Cittá</InfoText>
                <InfoText>: {item.city}</InfoText>
            </InfoText>
            <InfoText>
                <InfoText bold={true}>Provincia</InfoText>
                <InfoText>
                    :{' '}
                    {item.id_state && StateList[item.id_state]
                        ? StateList[item.id_state]
                        : ''}
                </InfoText>
            </InfoText>
            <InfoText>
                <InfoText bold={true}>Nazione</InfoText>
                <InfoText>
                    :{' '}
                    {item.id_state && CountryList[item.id_country]
                        ? CountryList[item.id_country]
                        : ''}
                </InfoText>
            </InfoText>
            <InfoText>
                <InfoText bold={true}>Telefono</InfoText>
                <InfoText>: {item.phone}</InfoText>
            </InfoText>
        </AddressItemWrapper>
    );
};

const AddressItemWrapper = styled(Wrapper)`
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 8px;
    margin-bottom: 8px;
    border-width: 4px;
    border-color: ${({ theme }) => theme.colors.white(1)};
    padding: 12px;
`;

const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto(700, false, true)};
    font-size: 24px;
    margin-bottom: 8px;
`;

const InfoText = styled.Text`
    font-size: 16px;
    ${({ bold }) =>
        bold
            ? css`
                  font-family: ${({ theme }) => theme.fonts.roboto(700)};
              `
            : css`
                  font-family: ${({ theme }) => theme.fonts.roboto(400)};
              `}
`;
