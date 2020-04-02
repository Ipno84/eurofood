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
} from './../../../../../constants/ErrorsConstants';
import ValidationError, {
    VALIDATION_CLASS_NAME
} from './../../../../../helpers/ValidationError';
import { all, call, put, select } from 'redux-saga/effects';

import getAddressFormKeySelector from './../../../../selectors/AddressesSelectors/addressForm/getAddressFormKeySelector';
import isPostcodeValid from '../../../../../helpers/isPostcodeValid';
import isVatNumberValid from '../../../../../helpers/isVatNumberValid';
import setErrorAction from './../../../../actions/ErrorsActions/setErrorAction';
import submitAddressAction from './../../../../actions/AddressesActions/submitAddressAction';

export default function* submitAddressSaga() {
    try {
        const id_address = yield select(
            getAddressFormKeySelector,
            'id_address'
        );
        const alias = yield select(getAddressFormKeySelector, 'alias');
        const firstname = yield select(getAddressFormKeySelector, 'firstname');
        const lastname = yield select(getAddressFormKeySelector, 'lastname');
        const company = yield select(getAddressFormKeySelector, 'company'); //Optional
        const vat_number = yield select(
            getAddressFormKeySelector,
            'vat_number'
        ); //Optional
        const address1 = yield select(getAddressFormKeySelector, 'address1');
        const address2 = yield select(getAddressFormKeySelector, 'address2'); //Optional
        const postcode = yield select(getAddressFormKeySelector, 'postcode');
        const city = yield select(getAddressFormKeySelector, 'city');
        const id_state = yield select(getAddressFormKeySelector, 'id_state');
        const id_country = yield select(
            getAddressFormKeySelector,
            'id_country'
        );
        const phone = yield select(getAddressFormKeySelector, 'phone');

        //VALIDATION
        const isValidAlias = alias.length > 0;
        if (!isValidAlias)
            throw new ValidationError('Alias non valido', {
                key: ADDRESS_ALIAS_ERROR
            });
        const isValidFirstName = firstname.length > 0;
        if (!isValidFirstName)
            throw new ValidationError('Nome non valido', {
                key: ADDRESS_FIRSTNAME_ERROR
            });
        const isValidLastname = lastname.length > 0;
        if (!isValidLastname)
            throw new ValidationError('Cognome non valido', {
                key: ADDRESS_LASTNAME_ERROR
            });
        const isValidVatNumber = isVatNumberValid(vat_number);
        if (!isValidVatNumber)
            throw new ValidationError('Numero della Partita IVA non valido', {
                key: ADDRESS_VAT_NUMBER_ERROR
            });
        const isValidAddress1 = address1.length > 0;
        if (!isValidAddress1)
            throw new ValidationError('Indirizzo non valido', {
                key: ADDRESS_ADDRESS1_ERROR
            });
        const isValidPostcode = isPostcodeValid(postcode);
        if (!isValidPostcode)
            throw new ValidationError('CAP non valido', {
                key: ADDRESS_POSTCODE_ERROR
            });
        const isValidCity = city.length > 0;
        if (!isValidCity)
            throw new ValidationError('Cittá non valida', {
                key: ADDRESS_CITY_ERROR
            });
        const isValidIdState = id_state.length > 0;
        if (!isValidIdState)
            throw new ValidationError('Provincia non valida', {
                key: ADDRESS_ID_STATE_ERROR
            });
        const isValidIdCountry = id_country.length > 0;
        if (!isValidIdCountry)
            throw new ValidationError('Nazione non valida', {
                key: ADDRESS_ID_COUNTRY_ERROR
            });
        const isValidIdPhoneNumber = phone.length > 7;
        if (!isValidIdPhoneNumber)
            throw new ValidationError('Numero di telefono non valido', {
                key: ADDRESS_PHONE_ERROR
            });

        console.log(
            id_address,
            alias,
            firstname,
            lastname,
            company,
            vat_number,
            address1,
            address2,
            postcode,
            city,
            id_state,
            id_country,
            phone
        );

        const isEdit = Boolean(id_address);
    } catch (error) {
        if (error.name === VALIDATION_CLASS_NAME) {
            yield all([
                put(
                    setErrorAction({
                        key: error.payload.key,
                        message: error.message
                    })
                ),
                put(submitAddressAction({ error }))
            ]);
        }
    }
}
