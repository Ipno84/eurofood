import { FAILURE, SUCCESS } from '../../constants/BaseConstants';
import {
    LOGOUT,
    SET_HAS_TO_COMPLETE_BUSINESS_REGISTRATION,
    SET_LOGIN_EMAIL,
    SET_LOGIN_PASSWORD,
    SET_REGISTER_ADDRESS,
    SET_REGISTER_CITY,
    SET_REGISTER_COMPANY,
    SET_REGISTER_EMAIL,
    SET_REGISTER_FIRSTNAME,
    SET_REGISTER_ID_COUNTRY,
    SET_REGISTER_ID_CUSTOMER,
    SET_REGISTER_ID_STATE,
    SET_REGISTER_ID_USER_TYPE,
    SET_REGISTER_LASTNAME,
    SET_REGISTER_NEWSLETTER,
    SET_REGISTER_PASSWORD,
    SET_REGISTER_PEC,
    SET_REGISTER_PHONE,
    SET_REGISTER_POSTCODE,
    SET_REGISTER_PSGDPR,
    SET_REGISTER_SDI,
    SET_REGISTER_VAT_NUMBER,
    SET_USER,
    SUBMIT_BILLING_ADDRESS,
    SUBMIT_LOGIN,
    SUBMIT_REGISTER,
    USER_TYPE_BUSINESS,
    USER_TYPE_PRIVATE
} from '../../constants/ClientConstants';

import { REDUCER_NAME_CLIENT } from '../../constants/StoreConstants';
import { createTransform } from 'redux-persist';
import parseJwtToken from './../../helpers/parseJwtToken';

export const initialState = {
    user: {},
    company: {},
    loginForm: {
        email: '',
        password: ''
    },
    loginSubmitted: false,
    registerForm: {
        id_customer: '',
        id_default_group: USER_TYPE_PRIVATE, // 5 = private, 6 = business
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        businessTypeData: {
            company: '',
            vat_number: '',
            sdi: '',
            pec: '',
            address: '',
            postcode: '',
            city: '',
            id_state: '',
            id_country: '10',
            phone: ''
        },
        newsletter: false, //send 1 if checked
        psgdpr: false //send 1 if checked - https://www.eurofoodservice.it/content/5-condizioni-registrazione-sito
    },
    registerSubmitted: false,
    billingAddressSubmitted: false,
    companyForm: {},
    jwt: '',
    hasToCompleteBusinessRegistration: false
};

export const ClientReducerTransform = createTransform(
    inboundState => {
        return { ...inboundState };
    },
    outboundState => {
        let state = {
            ...outboundState,
            loginForm: initialState.loginForm,
            loginSubmitted: initialState.loginSubmitted,
            registerForm: initialState.registerForm,
            registerSubmitted: initialState.registerSubmitted,
            companyForm: initialState.companyForm,
            hasToCompleteBusinessRegistration:
                initialState.hasToCompleteBusinessRegistration
        };
        try {
            const user = parseJwtToken(outboundState.jwt);
            if (
                user.id_default_group &&
                parseInt(user.id_default_group) === USER_TYPE_BUSINESS &&
                !user.billing_address_id
            ) {
                state = {
                    ...state,
                    user: initialState.user,
                    jwt: initialState.jwt
                };
            }
        } catch (error) {}
        return state;
    },
    { whitelist: REDUCER_NAME_CLIENT }
);

const ClientReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user
            };
        case SET_LOGIN_EMAIL:
            return {
                ...state,
                loginForm: { ...state.loginForm, email: action.email }
            };
        case SET_LOGIN_PASSWORD:
            return {
                ...state,
                loginForm: { ...state.loginForm, password: action.password }
            };
        case SUBMIT_LOGIN:
            return {
                ...state,
                loginSubmitted: true
            };
        case SUBMIT_LOGIN + SUCCESS:
            return {
                ...state,
                user: action.user,
                loginForm: initialState.loginForm,
                loginSubmitted: false,
                jwt: action.jwt
            };
        case SUBMIT_LOGIN + FAILURE:
            return {
                ...state,
                loginSubmitted: false
            };
        case SET_REGISTER_ID_CUSTOMER:
            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    id_customer: action.id_customer
                }
            };
        case SET_REGISTER_ID_USER_TYPE:
            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    id_default_group: action.idUserType
                }
            };
        case SET_REGISTER_EMAIL:
            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    email: action.email
                }
            };
        case SET_REGISTER_FIRSTNAME:
            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    firstname: action.firstname
                }
            };
        case SET_REGISTER_PSGDPR:
            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    psgdpr: !state.registerForm.psgdpr
                }
            };
        case SET_REGISTER_LASTNAME:
            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    lastname: action.lastname
                }
            };
        case SET_REGISTER_NEWSLETTER:
            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    newsletter: !state.registerForm.newsletter
                }
            };
        case SET_REGISTER_PASSWORD:
            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    password: action.password
                }
            };
        case SET_REGISTER_COMPANY:
            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    businessTypeData: {
                        ...state.registerForm.businessTypeData,
                        company: action.company
                    }
                }
            };
        case SET_REGISTER_VAT_NUMBER:
            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    businessTypeData: {
                        ...state.registerForm.businessTypeData,
                        vat_number: action.vat_number
                    }
                }
            };
        case SET_REGISTER_SDI:
            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    businessTypeData: {
                        ...state.registerForm.businessTypeData,
                        sdi: action.sdi
                    }
                }
            };
        case SET_REGISTER_PEC:
            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    businessTypeData: {
                        ...state.registerForm.businessTypeData,
                        pec: action.pec
                    }
                }
            };
        case SET_REGISTER_ADDRESS:
            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    businessTypeData: {
                        ...state.registerForm.businessTypeData,
                        address: action.address
                    }
                }
            };
        case SET_REGISTER_POSTCODE:
            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    businessTypeData: {
                        ...state.registerForm.businessTypeData,
                        postcode: action.postcode
                    }
                }
            };
        case SET_REGISTER_CITY:
            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    businessTypeData: {
                        ...state.registerForm.businessTypeData,
                        city: action.city
                    }
                }
            };
        case SET_REGISTER_ID_STATE:
            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    businessTypeData: {
                        ...state.registerForm.businessTypeData,
                        id_state: action.id_state
                    }
                }
            };
        case SET_REGISTER_ID_COUNTRY:
            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    businessTypeData: {
                        ...state.registerForm.businessTypeData,
                        id_country: action.id_country
                    }
                }
            };
        case SET_REGISTER_PHONE:
            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    businessTypeData: {
                        ...state.registerForm.businessTypeData,
                        phone: action.phone
                    }
                }
            };
        case SUBMIT_REGISTER:
            return {
                ...state,
                registerSubmitted: true
            };
        case SUBMIT_REGISTER + SUCCESS:
            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    id_customer: action.id_customer
                },
                registerSubmitted: false
            };
        case SUBMIT_REGISTER + FAILURE:
            return {
                ...state,
                registerSubmitted: false
            };
        case SUBMIT_BILLING_ADDRESS:
            return {
                ...state,
                billingAddressSubmitted: true
            };
        case SUBMIT_BILLING_ADDRESS + SUCCESS:
            return {
                ...state,
                billingAddressSubmitted: false,
                hasToCompleteBusinessRegistration: false
            };
        case SUBMIT_BILLING_ADDRESS + FAILURE:
            return {
                ...state,
                billingAddressSubmitted: false
            };
        case LOGOUT:
            return {
                ...state,
                user: initialState.user,
                company: initialState.company,
                jwt: initialState.jwt
            };
        case SET_HAS_TO_COMPLETE_BUSINESS_REGISTRATION:
            return {
                ...state,
                hasToCompleteBusinessRegistration:
                    action.hasToCompleteBusinessRegistration
            };
        default:
            return state;
    }
};

export default ClientReducer;
