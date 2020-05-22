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
    REGISTER_ADDRESS_ERROR,
    REGISTER_CITY_ERROR,
    REGISTER_COMPANY_ERROR,
    REGISTER_EMAIL_ERROR,
    REGISTER_FIRSTNAME_ERROR,
    REGISTER_ID_COUNTRY_ERROR,
    REGISTER_LASTNAME_ERROR,
    REGISTER_NEWSLETTER_ERROR,
    REGISTER_PASSWORD_ERROR,
    REGISTER_PEC_ERROR,
    REGISTER_PHONE_ERROR,
    REGISTER_POSTCODE_ERROR,
    REGISTER_PSGDPR_ERROR,
    REGISTER_SDI_ERROR,
    REGISTER_VAT_NUMBER_ERROR
} from './../../../../../constants/ErrorsConstants';
import {
    SET_LOGIN_EMAIL,
    SET_LOGIN_PASSWORD,
    SET_REGISTER_ADDRESS,
    SET_REGISTER_CITY,
    SET_REGISTER_COMPANY,
    SET_REGISTER_EMAIL,
    SET_REGISTER_FIRSTNAME,
    SET_REGISTER_ID_COUNTRY,
    SET_REGISTER_LASTNAME,
    SET_REGISTER_NEWSLETTER,
    SET_REGISTER_PASSWORD,
    SET_REGISTER_PEC,
    SET_REGISTER_POSTCODE,
    SET_REGISTER_PSGDPR,
    SET_REGISTER_SDI,
    SET_REGISTER_VAT_NUMBER
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
            case SET_REGISTER_COMPANY:
                errorKey = REGISTER_COMPANY_ERROR;
                break;
            case SET_REGISTER_VAT_NUMBER:
                errorKey = REGISTER_VAT_NUMBER_ERROR;
                break;
            case SET_REGISTER_SDI:
                errorKey = REGISTER_SDI_ERROR;
                break;
            case SET_REGISTER_PEC:
                errorKey = REGISTER_PEC_ERROR;
                break;
            case SET_REGISTER_ADDRESS:
                errorKey = REGISTER_ADDRESS_ERROR;
                break;
            case SET_REGISTER_POSTCODE:
                errorKey = REGISTER_POSTCODE_ERROR;
                break;
            case SET_REGISTER_CITY:
                errorKey = REGISTER_CITY_ERROR;
                break;
            case SET_REGISTER_ID_COUNTRY:
                errorKey = REGISTER_ID_COUNTRY_ERROR;
                break;
            case SET_REGISTER_PHONE:
                errorKey = REGISTER_PHONE_ERROR;
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
