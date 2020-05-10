import {
    REGISTER_ADDRESS_ERROR,
    REGISTER_CITY_ERROR,
    REGISTER_COMPANY_ERROR,
    REGISTER_EMAIL_ERROR,
    REGISTER_FIRSTNAME_ERROR,
    REGISTER_ID_COUNTRY_ERROR,
    REGISTER_ID_STATE_ERROR,
    REGISTER_LASTNAME_ERROR,
    REGISTER_PASSWORD_ERROR,
    REGISTER_PEC_ERROR,
    REGISTER_PHONE_ERROR,
    REGISTER_POSTCODE_ERROR,
    REGISTER_PSGDPR_ERROR,
    REGISTER_SDI_ERROR,
    REGISTER_VAT_NUMBER_ERROR
} from './../../../../../constants/ErrorsConstants';
import {
    USER_TYPE_BUSINESS,
    USER_TYPE_PRIVATE
} from '../../../../../constants/ClientConstants';
import ValidationError, {
    VALIDATION_CLASS_NAME
} from './../../../../../helpers/ValidationError';
import { all, call, put, select } from 'redux-saga/effects';

import Snackbar from 'react-native-snackbar';
import checkUserCall from './../../../../../api/calls/CustomersCalls/checkUserCall';
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
import getRegisterEmailSelector from './../../../../selectors/ClientSelectors/getRegisterEmailSelector';
import getRegisterFirstnameSelector from './../../../../selectors/ClientSelectors/getRegisterFirstnameSelector';
import getRegisterIdUserTypeSelector from './../../../../selectors/ClientSelectors/getRegisterIdUserTypeSelector';
import getRegisterLastnameSelector from './../../../../selectors/ClientSelectors/getRegisterLastnameSelector';
import getRegisterNewsletterSelector from './../../../../selectors/ClientSelectors/getRegisterNewsletterSelector';
import getRegisterPasswordSelector from './../../../../selectors/ClientSelectors/getRegisterPasswordSelector';
import getRegisterPsgdprSelector from './../../../../selectors/ClientSelectors/getRegisterPsgdprSelector';
import isPostcodeValid from '../../../../../helpers/isPostcodeValid';
import isValidEmail from './../../../../../helpers/isValidEmail';
import isVatNumberValid from '../../../../../helpers/isVatNumberValid';
import { orange } from '../../../../../constants/ThemeConstants';
import registerCall from './../../../../../api/calls/CustomersCalls/registerCall';
import setErrorAction from './../../../../actions/ErrorsActions/setErrorAction';
import submitRegisterAction from './../../../../actions/ClientActions/submitRegisterAction';

export default function* onSubmitRegisterSaga() {
    try {
        const idUserType = yield select(getRegisterIdUserTypeSelector);
        const newsletter = yield select(getRegisterNewsletterSelector);

        const firstname = yield select(getRegisterFirstnameSelector);
        if (!firstname)
            throw new ValidationError('Nome non valido', {
                key: REGISTER_FIRSTNAME_ERROR
            });

        const lastname = yield select(getRegisterLastnameSelector);
        if (!lastname)
            throw new ValidationError('Cognome non valido', {
                key: REGISTER_LASTNAME_ERROR
            });

        const email = yield select(getRegisterEmailSelector);
        const emailValid = Boolean(email.length && isValidEmail(email));
        if (!emailValid)
            throw new ValidationError('Indirizzo email non valido', {
                key: REGISTER_EMAIL_ERROR
            });

        const passwd = yield select(getRegisterPasswordSelector);
        const passwordValid = passwd.length > 6;
        if (!passwordValid)
            throw new ValidationError('Password non valida', {
                key: REGISTER_PASSWORD_ERROR
            });

        const psgdpr = yield select(getRegisterPsgdprSelector);
        if (!psgdpr)
            throw new ValidationError(
                `Accettare le condizioni per l'utilizzo del'applicazione`,
                { key: REGISTER_PSGDPR_ERROR }
            );
        // HANDLE BUSINESS TYPE FIELDS
        if (idUserType === USER_TYPE_BUSINESS) {
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
            const address = yield select(
                getRegisterBusinessTypeDataAddressSelector
            );
            if (!address)
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
            const phone = yield select(
                getRegisterBusinessTypeDataPhoneSelector
            );
            if (!phone || (phone && phone.length < 7))
                throw new ValidationError(`Numero di telefono non valido`, {
                    key: REGISTER_PHONE_ERROR
                });
        }
        const checkUser = yield call(checkUserCall, email);
        if (
            checkUser &&
            checkUser.customers &&
            checkUser.customers.length > 0
        ) {
            yield put(submitRegisterAction({ error: true }));
            Snackbar.show({
                text: `Esiste già un utente per l'indirizzo email prescelto ${email}`,
                duration: Snackbar.LENGTH_LONG,
                action: {
                    text: 'OK',
                    textColor: orange.toString(),
                    onPress: () => Snackbar.dismiss()
                }
            });
        } else {
            let results;
            let registerBody = {
                id_gender: idUserType,
                firstname,
                lastname,
                email,
                passwd,
                newsletter: newsletter ? 1 : 0,
                psgdpr: psgdpr ? 1 : 0
            };
            if (idUserType === USER_TYPE_PRIVATE) {
                results = yield call(registerCall, registerBody);
            } else if (idUserType === USER_TYPE_BUSINESS) {
                // TODO: activate right business register call
                // results = yield call(registerCall, {
                //     ...registerBody,
                //     company,
                //     vat_number,
                //     sdi,
                //     pec,
                //     address,
                //     postcode,
                //     city,
                //     id_state,
                //     id_country,
                //     phone
                // });
            }
            if (results && results.customer) {
                Snackbar.show({
                    text: `Il tuo account è stato creato con successo.
                    Riceverai una mail contenente un link per l'attivazione del tuo account.`,
                    duration: Snackbar.LENGTH_INDEFINITE,
                    action: {
                        text: 'OK',
                        textColor: orange.toString(),
                        onPress: () => Snackbar.dismiss()
                    }
                });
                yield put(
                    submitLoginAction({
                        success: true
                    })
                );
            }
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
                put(submitRegisterAction({ error: true }))
            ]);
        }
        yield put(submitRegisterAction({ error: true }));
    }
}
