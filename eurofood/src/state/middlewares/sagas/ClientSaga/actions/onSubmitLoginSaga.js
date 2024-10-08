import {
    LOGIN_EMAIL_ERROR,
    LOGIN_PASSWORD_ERROR
} from './../../../../../constants/ErrorsConstants';
import ValidationError, {
    VALIDATION_CLASS_NAME
} from './../../../../../helpers/ValidationError';
import { all, call, put, select } from 'redux-saga/effects';

import NavigatorRef from './../../../../../helpers/NavigatorRef';
import { ROUTE_NAME_HOME } from '../../../../../constants/RouteConstants';
import Snackbar from 'react-native-snackbar';
import { USER_TYPE_BUSINESS } from '../../../../../constants/ClientConstants';
import getLoginEmailSelector from './../../../../selectors/ClientSelectors/getLoginEmailSelector';
import getLoginPasswordSelector from './../../../../selectors/ClientSelectors/getLoginPasswordSelector';
import isValidEmail from './../../../../../helpers/isValidEmail';
import loginCall from './../../../../../api/calls/CustomersCalls/loginCall';
import { orange } from '../../../../../constants/ThemeConstants';
import parseJwtToken from './../../../../../helpers/parseJwtToken';
import setErrorAction from './../../../../actions/ErrorsActions/setErrorAction';
import setHasToCompleteBusinessRegistrationAction from '../../../../actions/ClientActions/setHasToCompleteBusinessRegistrationAction';
import submitLoginAction from './../../../../actions/ClientActions/submitLoginAction';

export default function* onSubmitLoginSaga() {
    try {
        const email = yield select(getLoginEmailSelector);
        const password = yield select(getLoginPasswordSelector);
        const emailValid = isValidEmail(email);
        if (!emailValid)
            throw new ValidationError('Indirizzo email non valido', {
                key: LOGIN_EMAIL_ERROR
            });
        const passwordValid = password.length > 0;
        if (!passwordValid)
            throw new ValidationError('Password non valida', {
                key: LOGIN_PASSWORD_ERROR
            });
        const jwt = yield call(loginCall, { email, password });
        if (jwt) {
            const user = parseJwtToken(jwt);
            if (user) {
                let actions = [
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
                } else {
                    NavigatorRef.reset({
                        index: 1,
                        routes: [{ name: ROUTE_NAME_HOME }]
                    });
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
                put(submitLoginAction({ error: true }))
            ]);
        } else {
            if (
                error &&
                error.payload &&
                error.payload.length &&
                error.payload[0].code === 403
            ) {
                Snackbar.show({
                    text: `Le credenziali inserite non sono corrette`,
                    duration: Snackbar.LENGTH_LONG,
                    action: {
                        text: 'OK',
                        textColor: orange.toString(),
                        onPress: () => Snackbar.dismiss()
                    }
                });
            }
            yield put(submitLoginAction({ error: true }));
        }
    }
}
