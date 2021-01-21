import {
    REGISTER_EMAIL_ERROR,
    REGISTER_FIRSTNAME_ERROR,
    REGISTER_LASTNAME_ERROR,
    REGISTER_PASSWORD_ERROR,
    REGISTER_PSGDPR_ERROR
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
import getRegisterEmailSelector from './../../../../selectors/ClientSelectors/getRegisterEmailSelector';
import getRegisterFirstnameSelector from './../../../../selectors/ClientSelectors/getRegisterFirstnameSelector';
import getRegisterIdUserTypeSelector from './../../../../selectors/ClientSelectors/getRegisterIdUserTypeSelector';
import getRegisterLastnameSelector from './../../../../selectors/ClientSelectors/getRegisterLastnameSelector';
import getRegisterNewsletterSelector from './../../../../selectors/ClientSelectors/getRegisterNewsletterSelector';
import getRegisterPasswordSelector from './../../../../selectors/ClientSelectors/getRegisterPasswordSelector';
import getRegisterPsgdprSelector from './../../../../selectors/ClientSelectors/getRegisterPsgdprSelector';
import isValidEmail from './../../../../../helpers/isValidEmail';
import loginCall from '../../../../../api/calls/CustomersCalls/loginCall';
import { orange } from '../../../../../constants/ThemeConstants';
import parseJwtToken from '../../../../../helpers/parseJwtToken';
import registerCall from './../../../../../api/calls/CustomersCalls/registerCall';
import setErrorAction from './../../../../actions/ErrorsActions/setErrorAction';
import setHasToCompleteBusinessRegistrationAction from './../../../../actions/ClientActions/setHasToCompleteBusinessRegistrationAction';
import submitLoginAction from '../../../../actions/ClientActions/submitLoginAction';
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

        const checkUser = yield call(checkUserCall, email);
        if (
            checkUser &&
            checkUser.customers &&
            checkUser.customers.length > 0
        ) {
            const errorText = `Esiste già un utente per l'indirizzo email prescelto ${email}`;
            Snackbar.show({
                text: errorText,
                duration: Snackbar.LENGTH_LONG,
                action: {
                    text: 'OK',
                    textColor: orange.toString(),
                    onPress: () => Snackbar.dismiss()
                }
            });
            throw new Error(errorText);
        } else {
            // N.B.: id_gender must have the opposite value to id_default_group for backend reasons
            const registerBody = {
                id_gender:
                    idUserType === USER_TYPE_PRIVATE
                        ? USER_TYPE_BUSINESS
                        : USER_TYPE_PRIVATE,
                id_default_group: idUserType,
                firstname,
                lastname,
                email,
                passwd,
                newsletter: newsletter ? 1 : 0,
                psgdpr: psgdpr ? 1 : 0
            };
            const results = yield call(registerCall, registerBody);
            if (results && results.customer) {
                let actions = [
                    put(
                        submitRegisterAction({
                            success: true,
                            id_customer: results.customer.id
                        })
                    )
                ];
                if (parseInt(results.customer.id_default_group) === USER_TYPE_PRIVATE) {
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
                } else if (parseInt(results.customer.id_default_group) === USER_TYPE_BUSINESS) {

                    // Replicate login logic
                    const jwt = yield call(loginCall, { email, password: passwd });
                    if (jwt) {
                        const user = parseJwtToken(jwt);
                        if (user) {
                            actions = [
                                put(
                                    submitLoginAction({
                                        success: true,
                                        user,
                                        jwt
                                    })
                                )
                            ];
                            if (
                                user.id_default_group &&
                                parseInt(user.id_default_group) === USER_TYPE_BUSINESS &&
                                !user.billing_address_id
                            ) {
                                actions.push(
                                    put(setHasToCompleteBusinessRegistrationAction(true))
                                );
                            }
                        }
                    }
                }
                yield all(actions);
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
