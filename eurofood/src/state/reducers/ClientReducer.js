import {
    SET_LOGIN_EMAIL,
    SET_LOGIN_PASSWORD
} from '../../constants/ClientConstants';

import { REDUCER_NAME_CLIENT } from '../../constants/StoreConstants';
import { createTransform } from 'redux-persist';

export const initialState = {
    user: {},
    company: {},
    loginForm: {
        email: '',
        password: ''
    },
    registerForm: {},
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
        default:
            return state;
    }
};

export default ClientReducer;
