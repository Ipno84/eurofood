import './src/polyfills';
import 'react-native-gesture-handler';

import { AppRegistry, YellowBox } from 'react-native';

import App from './App';
import { name as appName } from './app.json';
import jsToXml from './src/helpers/jsToXml';
import setupAxios from './src/api/setupAxios';
import stripe from 'tipsi-stripe';
import { stripeConfig } from './src/constants/CheckoutConstants';

stripe.setOptions(stripeConfig);

console.log(
    jsToXml({
        token: {
            card: {
                addressCity: null,
                addressCountry: null,
                addressLine1: null,
                addressLine2: null,
                addressState: null,
                addressZip: null,
                brand: 'Visa',
                cardId: 'card_1GmM2hFcSj0xfSJiRGZ8e58N',
                country: 'US',
                currency: null,
                cvc: null,
                expMonth: 1,
                expYear: 2024,
                fingerprint: null,
                funding: 'credit',
                last4: '4242',
                name: 'Marco Abate',
                number: null
            },
            created: 1590335235000,
            livemode: false,
            tokenId: 'tok_1GmM2hFcSj0xfSJimKQcSdvg',
            used: false
        }
    })
);

YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested' // TODO: Remove when fixed
]);

setupAxios();

AppRegistry.registerComponent(appName, () => App);
