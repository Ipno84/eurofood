import {
    CountryList,
    StateList
} from './../../../../../constants/AddressConstants';
import React, { useCallback } from 'react';

import AddressItemWrapper from './AddressItemWrapper';
import InfoText from './InfoText';
import Title from './Title';
import Touchable from './../../Button/Touchable';
import editAddressAction from './../../../../../state/actions/AddressesActions/editAddressAction';
import { useDispatch } from 'react-redux';

const AddressItem = ({ item, onPress, isSelected }) => {
    const dispatch = useDispatch();
    const editAddress = useCallback(() => dispatch(editAddressAction(item)), [
        dispatch
    ]);
    return (
        <Touchable onPress={onPress} onLongPress={() => editAddress()}>
            <AddressItemWrapper isSelected={isSelected}>
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
                    <InfoText bold={true}>Azienda</InfoText>
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
        </Touchable>
    );
};

export default AddressItem;
