import {
    LOGOUT,
    SET_LOGIN_EMAIL,
    SET_LOGIN_PASSWORD,
    SET_REGISTER_EMAIL,
    SET_REGISTER_FIRSTNAME,
    SET_REGISTER_ID_GENDER,
    SET_REGISTER_LASTNAME,
    SET_REGISTER_NEWSLETTER,
    SET_REGISTER_PASSWORD,
    SET_REGISTER_PSGDPR,
    SUBMIT_LOGIN
} from '../../constants/ClientConstants';

import { REDUCER_NAME_CLIENT } from '../../constants/StoreConstants';
import { SUCCESS } from '../../constants/BaseConstants';
import { createTransform } from 'redux-persist';

export const initialState = {
    user: {},
    company: {},
    loginForm: {
        email: '',
        password: ''
    },
    registerForm: {
        id_gender: 1, // 1 = male, 2 = female
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        newsletter: false, //send 1 if checked
        psgdpr: false //send 1 if checked - https://www.eurofoodservice.it/content/5-condizioni-registrazione-sito
    },
    companyForm: {}
};

export const ClientReducerTransform = createTransform(
    inboundState => {
        return { ...inboundState };
    },
    outboundState => {
        return {
            ...outboundState,
            loginForm: initialState.loginForm,
            registerForm: initialState.registerForm,
            companyForm: initialState.companyForm
        };
    },
    { whitelist: REDUCER_NAME_CLIENT }
);

const ClientReducer = (state = initialState, action) => {
    switch (action.type) {
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
        case SUBMIT_LOGIN + SUCCESS:
            return {
                ...state,
                user: action.user,
                loginForm: initialState.loginForm
            };
        case SET_REGISTER_ID_GENDER:
            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    id_gender: action.idGender
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
                    psgdpr: action.psgdpr
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
                    newsletter: action.newsletter
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
        case LOGOUT:
            return {
                ...state,
                user: initialState.user,
                company: initialState.company
            };
        default:
            return state;
    }
};

export default ClientReducer;
