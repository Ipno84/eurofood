import {
    ADDRESS_ADDRESS1_ERROR,
    ADDRESS_ADDRESS2_ERROR,
    ADDRESS_ALIAS_ERROR,
    ADDRESS_CITY_ERROR,
    ADDRESS_COMPANY_ERROR,
    ADDRESS_FIRSTNAME_ERROR,
    ADDRESS_ID_COUNTRY_ERROR,
    ADDRESS_ID_STATE_ERROR,
    ADDRESS_LASTNAME_ERROR,
    ADDRESS_PHONE_ERROR,
    ADDRESS_POSTCODE_ERROR,
    ADDRESS_VAT_NUMBER_ERROR
} from './../../../../constants/ErrorsConstants';
import {
    CountryList,
    StateList
} from './../../../../constants/AddressConstants';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ButtonSubmit from './ButtonSubmit';
import Container from './../../atoms/Container';
import Input from './Input';
import ListHeaderText from './../../atoms/Text/ListHeaderText';
import { ScrollView } from 'react-native';
import Select from './Select';
import Spacer from './../../atoms/Spacer';
import Wrapper from './../../atoms/Card/Wrapper';
import getAddressFormKeySelector from './../../../../state/selectors/AddressesSelectors/addressForm/getAddressFormKeySelector';
import resetAddressFormAction from './../../../../state/actions/AddressesActions/resetAddressFormAction';

const AddressForm = ({ toggleButton }) => {
    const dispatch = useDispatch();
    const resetAddressForm = useCallback(
        () => dispatch(resetAddressFormAction()),
        [dispatch]
    );
    const idAddress = useSelector(state =>
        getAddressFormKeySelector(state, 'id_address')
    );
    useEffect(() => {
        () => {
            resetAddressForm();
        };
    }, [resetAddressForm]);
    return (
        <>
            <ScrollView>
                <Container>
                    <Wrapper>
                        <Spacer top={16} />
                        <ListHeaderText center={true}>
                            {idAddress ? 'Modifica' : 'Nuovo'} indirizzo
                        </ListHeaderText>
                        <Input
                            placeholder="Alias"
                            formKey="alias"
                            errorKey={ADDRESS_ALIAS_ERROR}
                            autoCompleteType="username"
                            textContentType="nickname"
                        />
                        <Input
                            placeholder="Nome"
                            formKey="firstname"
                            errorKey={ADDRESS_FIRSTNAME_ERROR}
                            autoCompleteType="name"
                            textContentType="givenName"
                        />
                        <Input
                            placeholder="Cognome"
                            formKey="lastname"
                            errorKey={ADDRESS_LASTNAME_ERROR}
                            textContentType="familyName"
                        />
                        <Input
                            placeholder="Azienda"
                            formKey="company"
                            errorKey={ADDRESS_COMPANY_ERROR}
                            textContentType="organizationName"
                        />
                        <Input
                            placeholder="Numero P.IVA"
                            formKey="vat_number"
                            errorKey={ADDRESS_VAT_NUMBER_ERROR}
                        />
                        <Input
                            placeholder="Indirizzo"
                            formKey="address1"
                            errorKey={ADDRESS_ADDRESS1_ERROR}
                            autoCompleteType="street-address"
                            textContentType="streetAddressLine1"
                        />
                        <Input
                            placeholder="Completamento indirizzo"
                            formKey="address2"
                            errorKey={ADDRESS_ADDRESS2_ERROR}
                            autoCompleteType="street-address"
                            textContentType="streetAddressLine2"
                        />
                        <Input
                            placeholder="CAP"
                            formKey="postcode"
                            errorKey={ADDRESS_POSTCODE_ERROR}
                            autoCompleteType="postal-code"
                            textContentType="postalCode"
                            keyboardType="numeric"
                        />
                        <Input
                            placeholder="Cittá"
                            formKey="city"
                            errorKey={ADDRESS_CITY_ERROR}
                            textContentType="addressCity"
                        />
                        <Select
                            options={StateList}
                            formatOptions={options => Object.keys(options)}
                            formKey="id_state"
                            errorKey={ADDRESS_ID_STATE_ERROR}
                            placeholder="Seleziona la provincia"
                        />
                        <Select
                            options={CountryList}
                            formatOptions={options => Object.keys(options)}
                            formKey="id_country"
                            errorKey={ADDRESS_ID_COUNTRY_ERROR}
                            placeholder="Seleziona lo stato"
                        />
                        <Input
                            placeholder="Telefono"
                            formKey="phone"
                            errorKey={ADDRESS_PHONE_ERROR}
                            autoCompleteType="tel"
                            textContentType="telephoneNumber"
                            keyboardType="phone-pad"
                        />
                        <Spacer top={16} />
                        <ButtonSubmit />
                    </Wrapper>
                </Container>
                {toggleButton()}
            </ScrollView>
        </>
    );
};

export default AddressForm;
