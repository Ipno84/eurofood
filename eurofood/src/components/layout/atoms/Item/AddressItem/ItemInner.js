import {
    CountryList,
    StateList
} from './../../../../../constants/AddressConstants';

import InfoText from './InfoText';
import React from 'react';
import Title from './Title';

const ItemInner = ({ item }) => {
    return (
        <>
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
        </>
    );
};

export default ItemInner;
