import { Platform } from 'react-native';

export const SET_SELECTED_CARRIER_METHOD = 'SET_SELECTED_CARRIER_METHOD';
export const SET_SELECTED_PAYMENT_METHOD = 'SET_SELECTED_PAYMENT_METHOD';
export const SET_STRIPE_TOKEN = 'SET_STRIPE_TOKEN';

let stripeConfig = {
    publishableKey: 'pk_test_94TNPj0Fiwql8EwRqoHtkJma00hsXgD5QO',
    merchantId: 'acct_1GPrWYFcSj0xfSJi'
};

if (process.env.NODE_ENV === 'development' && Platform.OS === 'android') {
    stripeConfig['androidPayMode'] = 'test';
}
