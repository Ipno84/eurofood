import {
    REGISTER_EMAIL_ERROR,
    REGISTER_FIRSTNAME_ERROR,
    REGISTER_LASTNAME_ERROR,
    REGISTER_NEWSLETTER_ERROR,
    REGISTER_PASSWORD_ERROR,
    REGISTER_PSGDPR_ERROR
} from './../../../../../constants/ErrorsConstants';
import ValidationError, {
    VALIDATION_CLASS_NAME
} from './../../../../../helpers/ValidationError';
import { all, call, put, select } from 'redux-saga/effects';

import getRegisterEmailSelector from './../../../../selectors/ClientSelectors/getRegisterEmailSelector';
import getRegisterFirstnameSelector from './../../../../selectors/ClientSelectors/getRegisterFirstnameSelector';
import getRegisterIdGenderSelector from './../../../../selectors/ClientSelectors/getRegisterIdGenderSelector';
import getRegisterLastnameSelector from './../../../../selectors/ClientSelectors/getRegisterLastnameSelector';
import getRegisterNewsletterSelector from './../../../../selectors/ClientSelectors/getRegisterNewsletterSelector';
import getRegisterPasswordSelector from './../../../../selectors/ClientSelectors/getRegisterPasswordSelector';
import getRegisterPsgdprSelector from './../../../../selectors/ClientSelectors/getRegisterPsgdprSelector';
import isPasswordValid from './../../../../../helpers/isPasswordValid';
import isValidEmail from './../../../../../helpers/isValidEmail';
import registerCall from './../../../../../api/calls/CustomersCalls/registerCall';
import setErrorAction from './../../../../actions/ErrorsActions/setErrorAction';
import submitRegisterAction from './../../../../actions/ClientActions/submitRegisterAction';

export default function* onSubmitRegisterSaga() {
    try {
        const email = yield select(getRegisterEmailSelector);
        const firstname = yield select(getRegisterFirstnameSelector);
        const idGender = yield select(getRegisterIdGenderSelector);
        const lastname = yield select(getRegisterLastnameSelector);
        const newsletter = yield select(getRegisterNewsletterSelector);
        const password = yield select(getRegisterPasswordSelector);
        const psgdpr = yield select(getRegisterPsgdprSelector);
        const emailValid = Boolean(email.length && isValidEmail(email));
        // const passwordValid = isPasswordValid(password);
        const passwordValid = password.length > 6;
        if (!firstname)
            throw new ValidationError('Nome non valido', {
                key: REGISTER_FIRSTNAME_ERROR
            });
        if (!lastname)
            throw new ValidationError('Cognome non valido', {
                key: REGISTER_LASTNAME_ERROR
            });
        if (!emailValid)
            throw new ValidationError('Indirizzo email non valido', {
                key: REGISTER_EMAIL_ERROR
            });
        if (!passwordValid)
            throw new ValidationError('Password non valida', {
                key: REGISTER_PASSWORD_ERROR
            });
        if (!newsletter)
            throw new ValidationError(
                'Accettare la sottoscrizione alla newsletter',
                { key: REGISTER_NEWSLETTER_ERROR }
            );
        if (!psgdpr)
            throw new ValidationError(
                `Accettare le condizioni per l'utilizzo del'applicazione`,
                { key: REGISTER_PSGDPR_ERROR }
            );
        const results = yield call(registerCall, email, password);
        // if (results && results.customers && results.customers.length) {
        //     yield put(
        //         submitLoginAction({
        //             success: true
        //         })
        //     );
        // }
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
    }
}
