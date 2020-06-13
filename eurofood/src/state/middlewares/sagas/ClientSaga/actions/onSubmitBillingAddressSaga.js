import {
    REGISTER_ADDRESS_ERROR,
    REGISTER_CITY_ERROR,
    REGISTER_COMPANY_ERROR,
    REGISTER_ID_COUNTRY_ERROR,
    REGISTER_ID_STATE_ERROR,
    REGISTER_PEC_ERROR,
    REGISTER_PHONE_ERROR,
    REGISTER_POSTCODE_ERROR,
    REGISTER_SDI_ERROR,
    REGISTER_VAT_NUMBER_ERROR
} from './../../../../../constants/ErrorsConstants';
import ValidationError, {
    VALIDATION_CLASS_NAME
} from './../../../../../helpers/ValidationError';
import { all, call, put, select } from 'redux-saga/effects';

import NavigatorRef from '../../../../../helpers/NavigatorRef';
import { ROUTE_NAME_HOME } from '../../../../../constants/RouteConstants';
import Snackbar from 'react-native-snackbar';
// import checkUserByIdCall from '../../../../../api/calls/CustomersCalls/checkUserByIdCall';
import createAddressCall from '../../../../../api/calls/AddressesCalls/createAddressCall';
import getRegisterBusinessTypeDataAddressSelector from '../../../../selectors/ClientSelectors/getRegisterBusinessTypeDataAddressSelector';
import getRegisterBusinessTypeDataCitySelector from '../../../../selectors/ClientSelectors/getRegisterBusinessTypeDataCitySelector';
import getRegisterBusinessTypeDataCompanySelector from '../../../../selectors/ClientSelectors/getRegisterBusinessTypeDataCompanySelector';
import getRegisterBusinessTypeDataIdCountrySelector from '../../../../selectors/ClientSelectors/getRegisterBusinessTypeDataIdCountrySelector';
import getRegisterBusinessTypeDataIdStateSelector from '../../../../selectors/ClientSelectors/getRegisterBusinessTypeDataIdStateSelector';
import getRegisterBusinessTypeDataPecSelector from '../../../../selectors/ClientSelectors/getRegisterBusinessTypeDataPecSelector';
import getRegisterBusinessTypeDataPhoneSelector from '../../../../selectors/ClientSelectors/getRegisterBusinessTypeDataPhoneSelector';
import getRegisterBusinessTypeDataPostcodeSelector from '../../../../selectors/ClientSelectors/getRegisterBusinessTypeDataPostcodeSelector';
import getRegisterBusinessTypeDataSdiSelector from '../../../../selectors/ClientSelectors/getRegisterBusinessTypeDataSdiSelector';
import getRegisterBusinessTypeDataVatNumberSelector from '../../../../selectors/ClientSelectors/getRegisterBusinessTypeDataVatNumberSelector';
import getRegisterIdCustomerSelector from '../../../../selectors/ClientSelectors/getRegisterIdCustomerSelector';
import getUserFirstnameSelector from '../../../../selectors/ClientSelectors/getUserFirstnameSelector';
import getUserIdSelector from '../../../../selectors/ClientSelectors/getUserIdSelector';
import getUserLastnameSelector from '../../../../selectors/ClientSelectors/getUserLastnameSelector';
import getUserSelector from '../../../../selectors/ClientSelectors/getUserSelector';
import isPostcodeValid from '../../../../../helpers/isPostcodeValid';
import isValidEmail from './../../../../../helpers/isValidEmail';
import isVatNumberValid from '../../../../../helpers/isVatNumberValid';
import { orange } from '../../../../../constants/ThemeConstants';
import setErrorAction from './../../../../actions/ErrorsActions/setErrorAction';
import setHasToCompleteBusinessRegistrationAction from '../../../../actions/ClientActions/setHasToCompleteBusinessRegistrationAction';
import setUserAction from './../../../../actions/ClientActions/setUserAction';
import submitBillingAddressAction from './../../../../actions/ClientActions/submitBillingAddressAction';

export default function* onSubmitBillingAddressSaga() {
    try {
        const id_customer = yield select(getUserIdSelector);
        const id_customer_form = yield select(getRegisterIdCustomerSelector);
        const firstname = yield select(getUserFirstnameSelector);
        const lastname = yield select(getUserLastnameSelector);
        // Company name validation
        const company = yield select(
            getRegisterBusinessTypeDataCompanySelector
        );
        if (!company)
            throw new ValidationError(`Ragione sociale non valida`, {
                key: REGISTER_COMPANY_ERROR
            });
        // Vat number validation
        const vat_number = yield select(
            getRegisterBusinessTypeDataVatNumberSelector
        );
        if (!isVatNumberValid(vat_number))
            throw new ValidationError(`Partita IVA non valida`, {
                key: REGISTER_VAT_NUMBER_ERROR
            });
        // SDI validation
        const sdi = yield select(getRegisterBusinessTypeDataSdiSelector);
        if (!sdi)
            throw new ValidationError(`SDI non valido`, {
                key: REGISTER_SDI_ERROR
            });
        // Pec validation
        const pec = yield select(getRegisterBusinessTypeDataPecSelector);
        const pecValid = Boolean(pec.length && isValidEmail(pec));
        if (!pecValid)
            throw new ValidationError(`Indirizzo PEC non valido`, {
                key: REGISTER_PEC_ERROR
            });
        // Addresss validation
        const address1 = yield select(
            getRegisterBusinessTypeDataAddressSelector
        );
        if (!address1)
            throw new ValidationError(`Indirizzo non valido`, {
                key: REGISTER_ADDRESS_ERROR
            });
        // Postcode validation
        const postcode = yield select(
            getRegisterBusinessTypeDataPostcodeSelector
        );
        const isValidPostcode = isPostcodeValid(postcode);
        if (!isValidPostcode)
            throw new ValidationError(`Codice postale non valido`, {
                key: REGISTER_POSTCODE_ERROR
            });
        // City validation
        const city = yield select(getRegisterBusinessTypeDataCitySelector);
        if (!city)
            throw new ValidationError(`Cittá non valida`, {
                key: REGISTER_CITY_ERROR
            });
        // Id state validation
        const id_state = yield select(
            getRegisterBusinessTypeDataIdStateSelector
        );
        if (!id_state)
            throw new ValidationError(`Provincia non valida`, {
                key: REGISTER_ID_STATE_ERROR
            });
        // Id country validation
        const id_country = yield select(
            getRegisterBusinessTypeDataIdCountrySelector
        );
        if (!id_country)
            throw new ValidationError(`Nazione non valida`, {
                key: REGISTER_ID_COUNTRY_ERROR
            });
        // Phone validation
        const phone = yield select(getRegisterBusinessTypeDataPhoneSelector);
        if (!phone || (phone && phone.length < 7))
            throw new ValidationError(`Numero di telefono non valido`, {
                key: REGISTER_PHONE_ERROR
            });
        // const checkUser = yield call(
        //     checkUserByIdCall,
        //     id_customer ? id_customer : id_customer_form
        // );
        // if (
        //     checkUser &&
        //     checkUser.customers &&
        //     checkUser.customers.length > 0
        // ) {
        const results = yield call(createAddressCall, {
            alias: 'Indirizzo di fatturazione',
            id_customer: id_customer ? id_customer : id_customer_form,
            firstname,
            lastname,
            company,
            vat_number,
            sdi,
            pec,
            address1,
            postcode,
            city,
            id_state,
            id_country,
            phone
        });
        if (results && results.address) {
            const user = yield select(getUserSelector);
            let actions = [put(submitBillingAddressAction({ success: true }))];
            if (user && id_customer) {
                actions.push(
                    put(
                        setUserAction({
                            ...user,
                            billing_address_id: results.address.id
                        })
                    )
                );
                actions.push(
                    put(setHasToCompleteBusinessRegistrationAction(false))
                );
            }
            NavigatorRef.reset({
                index: 1,
                routes: [{ name: ROUTE_NAME_HOME }]
            });
            Snackbar.show({
                text: `Indirizzo di fatturazione salvato correttamente`,
                duration: Snackbar.LENGTH_LONG,
                action: {
                    text: 'OK',
                    textColor: orange.toString(),
                    onPress: () => Snackbar.dismiss()
                }
            });
            yield all(actions);
        }
        // }
    } catch (error) {
        console.log(error);
        let actions = [put(submitBillingAddressAction({ error: true }))];
        if (error.name === VALIDATION_CLASS_NAME) {
            actions.push(
                put(
                    setErrorAction({
                        key: error.payload.key,
                        message: error.message
                    })
                )
            );
        } else if (
            error &&
            error.payload &&
            error.payload.length &&
            error.payload[0].code
        ) {
            Snackbar.show({
                text: error.payload[0].message,
                duration: Snackbar.LENGTH_LONG,
                action: {
                    text: 'OK',
                    textColor: orange.toString(),
                    onPress: () => Snackbar.dismiss()
                }
            });
        }
        yield all(actions);
    }
}
