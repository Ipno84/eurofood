import './src/polyfills';
import 'react-native-gesture-handler';

import { AppRegistry, YellowBox } from 'react-native';

import App from './App';
import { name as appName } from './app.json';
import setupAxios from './src/api/setupAxios';
import stripe from 'tipsi-stripe';

stripe.setOptions({
    publishableKey: 'pk_test_94TNPj0Fiwql8EwRqoHtkJma00hsXgD5QO',
    merchantId: 'acct_1GPrWYFcSj0xfSJi',
    androidPayMode: 'test'
});

YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested' // TODO: Remove when fixed
]);

setupAxios();

AppRegistry.registerComponent(appName, () => App);
