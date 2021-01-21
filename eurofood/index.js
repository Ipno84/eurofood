import './src/polyfills';
import 'react-native-gesture-handler';

import { AppRegistry, YellowBox } from 'react-native';

import App from './App';
import { name as appName } from './app.json';
import setupAxios from './src/api/setupAxios';
import stripe from 'tipsi-stripe';
import { stripeConfig } from './src/constants/CheckoutConstants';

if (__DEV__) {
    import('./reactotron.config').then(() =>
        console.log('Reactotron Configured')
    );
}

stripe.setOptions(stripeConfig);

YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested' // TODO: Remove when fixed
]);

setupAxios();

AppRegistry.registerComponent(appName, () => App);
