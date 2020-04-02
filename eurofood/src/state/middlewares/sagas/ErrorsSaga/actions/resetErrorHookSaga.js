import {
    ADDRESS_ADDRESS1_ERROR,
    ADDRESS_ALIAS_ERROR,
    ADDRESS_CITY_ERROR,
    ADDRESS_FIRSTNAME_ERROR,
    ADDRESS_ID_COUNTRY_ERROR,
    ADDRESS_ID_STATE_ERROR,
    ADDRESS_LASTNAME_ERROR,
    ADDRESS_PHONE_ERROR,
    ADDRESS_POSTCODE_ERROR,
    LOGIN_EMAIL_ERROR,
    LOGIN_PASSWORD_ERROR,
    REGISTER_EMAIL_ERROR,
    REGISTER_FIRSTNAME_ERROR,
    REGISTER_LASTNAME_ERROR,
    REGISTER_NEWSLETTER_ERROR,
    REGISTER_PASSWORD_ERROR,
    REGISTER_PSGDPR_ERROR
} from './../../../../../constants/ErrorsConstants';
import {
    SET_LOGIN_EMAIL,
    SET_LOGIN_PASSWORD,
    SET_REGISTER_EMAIL,
    SET_REGISTER_FIRSTNAME,
    SET_REGISTER_LASTNAME,
    SET_REGISTER_NEWSLETTER,
    SET_REGISTER_PASSWORD,
    SET_REGISTER_PSGDPR
} from './../../../../../constants/ClientConstants';
import { all, call, put, select } from 'redux-saga/effects';

import { SET_ADDRESS_KEY_VALUE } from '../../../../../constants/AddressConstants';
import getErrorSelector from './../../../../selectors/ErrorsSelectors/getErrorSelector';
import getErrorsSelector from './../../../../selectors/ErrorsSelectors/getErrorsSelector';
import setErrorsAction from './../../../../actions/ErrorsActions/setErrorsAction';

export default function* resetErrorHookSaga({ type, key }) {
    try {
        let errorKey = '';
        switch (type) {
            case SET_LOGIN_EMAIL:
                errorKey = LOGIN_EMAIL_ERROR;
                break;
            case SET_LOGIN_PASSWORD:
                errorKey = LOGIN_PASSWORD_ERROR;
                break;
            case SET_REGISTER_EMAIL:
                errorKey = REGISTER_EMAIL_ERROR;
                break;
            case SET_REGISTER_FIRSTNAME:
                errorKey = REGISTER_FIRSTNAME_ERROR;
                break;
            case SET_REGISTER_LASTNAME:
                errorKey = REGISTER_LASTNAME_ERROR;
                break;
            case SET_REGISTER_NEWSLETTER:
                errorKey = REGISTER_NEWSLETTER_ERROR;
                break;
            case SET_REGISTER_PASSWORD:
                errorKey = REGISTER_PASSWORD_ERROR;
                break;
            case SET_REGISTER_PSGDPR:
                errorKey = REGISTER_PSGDPR_ERROR;
                break;
            case SET_ADDRESS_KEY_VALUE:
                switch (key) {
                    case 'alias':
                        errorKey = ADDRESS_ALIAS_ERROR;
                        break;
                    case 'firstname':
                        errorKey = ADDRESS_FIRSTNAME_ERROR;
                        break;
                    case 'lastname':
                        errorKey = ADDRESS_LASTNAME_ERROR;
                        break;
                    case 'address1':
                        errorKey = ADDRESS_ADDRESS1_ERROR;
                        break;
                    case 'postcode':
                        errorKey = ADDRESS_POSTCODE_ERROR;
                        break;
                    case 'city':
                        errorKey = ADDRESS_CITY_ERROR;
                        break;
                    case 'id_state':
                        errorKey = ADDRESS_ID_STATE_ERROR;
                        break;
                    case 'id_country':
                        errorKey = ADDRESS_ID_COUNTRY_ERROR;
                        break;
                    case 'phone':
                        errorKey = ADDRESS_PHONE_ERROR;
                        break;
                }
                break;
        }
        if (errorKey) {
            const error = yield select(getErrorSelector, errorKey);
            if (error) {
                const errors = yield select(getErrorsSelector);
                const { [errorKey]: toRemove, ...newErrors } = errors;
                yield put(setErrorsAction(newErrors));
            }
        }
    } catch (error) {}
}
