import { YellowBox } from 'react-native';
import setupAxios from './../api/setupAxios';
import stripe from 'tipsi-stripe';
import { stripeConfig } from './../constants/CheckoutConstants';

export default () => {
    stripe.setOptions(stripeConfig);
    setupAxios();

    YellowBox.ignoreWarnings([
        'VirtualizedLists should never be nested' // TODO: Remove when fixed
    ]);
};
