import {
    ADDRESS_ADDRESS1_ERROR,
    ADDRESS_ALIAS_ERROR,
    ADDRESS_CITY_ERROR,
    ADDRESS_FIRSTNAME_ERROR,
    ADDRESS_ID_COUNTRY_ERROR,
    ADDRESS_ID_STATE_ERROR,
    ADDRESS_LASTNAME_ERROR,
    ADDRESS_PHONE_ERROR,
    ADDRESS_POSTCODE_ERROR
} from './../../../../../constants/ErrorsConstants';
import ValidationError, {
    VALIDATION_CLASS_NAME
} from './../../../../../helpers/ValidationError';
import { all, call, put, select } from 'redux-saga/effects';

import NavigatorRef from '../../../../../helpers/NavigatorRef';
import { StackActions } from '@react-navigation/native';
import createAddressCall from '../../../../../api/calls/AddressesCalls/createAddressCall';
import editAddressCall from '../../../../../api/calls/AddressesCalls/editAddressCall';
import getAddressFormKeySelector from './../../../../selectors/AddressesSelectors/addressForm/getAddressFormKeySelector';
import getAddressFormSelector from './../../../../selectors/AddressesSelectors/addressForm/getAddressFormSelector';
import isPostcodeValid from '../../../../../helpers/isPostcodeValid';
import removeObjectProperty from '../../../../../helpers/removeObjectProperty';
import setErrorAction from './../../../../actions/ErrorsActions/setErrorAction';
import showBillingAddressFormAction from './../../../../actions/CartActions/showBillingAddressFormAction';
import showShippingAddressFormAction from './../../../../actions/CartActions/showShippingAddressFormAction';
import submitAddressAction from './../../../../actions/AddressesActions/submitAddressAction';

export default function* submitAddressSaga() {
    try {
        let address = yield select(getAddressFormSelector);

        const company = yield select(getAddressFormKeySelector, 'company'); //Optional
        const vat_number = yield select(
            getAddressFormKeySelector,
            'vat_number'
        ); //Optional
        const address2 = yield select(getAddressFormKeySelector, 'address2'); //Optional

        //VALIDATION
        const isValidAlias = address.alias.length > 0;
        if (!isValidAlias)
            throw new ValidationError('Alias non valido', {
                key: ADDRESS_ALIAS_ERROR
            });
        const isValidFirstName = address.firstname.length > 0;
        if (!isValidFirstName)
            throw new ValidationError('Nome non valido', {
                key: ADDRESS_FIRSTNAME_ERROR
            });
        const isValidLastname = address.lastname.length > 0;
        if (!isValidLastname)
            throw new ValidationError('Cognome non valido', {
                key: ADDRESS_LASTNAME_ERROR
            });
        const isValidAddress1 = address.address1.length > 0;
        if (!isValidAddress1)
            throw new ValidationError('Indirizzo non valido', {
                key: ADDRESS_ADDRESS1_ERROR
            });
        const isValidPostcode = isPostcodeValid(address.postcode);
        if (!isValidPostcode)
            throw new ValidationError('CAP non valido', {
                key: ADDRESS_POSTCODE_ERROR
            });
        const isValidCity = address.city.length > 0;
        if (!isValidCity)
            throw new ValidationError('Cittá non valida', {
                key: ADDRESS_CITY_ERROR
            });
        const isValidIdState = address.id_state.length > 0;
        if (!isValidIdState)
            throw new ValidationError('Provincia non valida', {
                key: ADDRESS_ID_STATE_ERROR
            });
        const isValidIdCountry = address.id_country.length > 0;
        if (!isValidIdCountry)
            throw new ValidationError('Nazione non valida', {
                key: ADDRESS_ID_COUNTRY_ERROR
            });
        const isValidIdPhoneNumber = address.phone.length > 7;
        if (!isValidIdPhoneNumber)
            throw new ValidationError('Numero di telefono non valido', {
                key: ADDRESS_PHONE_ERROR
            });

        if (company) address = { ...address, company };
        if (vat_number) address = { ...address, vat_number };
        if (address2) address = { ...address, address2 };

        let results;
        if (address.id) {
            results = yield call(editAddressCall, address);
        } else {
            if (address.id === '')
                address = removeObjectProperty(address, 'id');
            if (address.company === '') address = { ...address, company: '-' };
            if (address.vat_number === '')
                address = { ...address, vat_number: '-' };
            results = yield call(createAddressCall, address);
        }
        if (results && results.address) {
            const navRef = new NavigatorRef();
            const currentRouteName = navRef.getCurrentRouteName();
            let actions = [
                put(
                    submitAddressAction({
                        success: true,
                        address: results.address
                    })
                )
            ];
            if (currentRouteName === 'ShippingAddress') {
                actions.push(put(showShippingAddressFormAction(false)));
            } else if (currentRouteName === 'BillingAddress') {
                actions.push(put(showBillingAddressFormAction(false)));
            } else if (currentRouteName === 'EditAddress') {
                const navRef = new NavigatorRef();
                navRef.navigation.dispatch(StackActions.pop(1));
            }
            yield all(actions);
        }
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
        } else {
            yield put(submitAddressAction({ error }));
        }
    }
}
