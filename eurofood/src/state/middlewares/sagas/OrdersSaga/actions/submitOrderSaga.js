import {
    ROUTE_NAME_HOME,
    ROUTE_NAME_ORDER,
    ROUTE_NAME_ORDERS
} from '../../../../../constants/RouteConstants';
import { call, put, select } from 'redux-saga/effects';

import NavigatorRef from './../../../../../helpers/NavigatorRef';
import Snackbar from 'react-native-snackbar';
import createOrderCall from './../../../../../api/calls/OrdersCall/createOrderCall';
import getCartTotalsSelector from '../../../../selectors/CartSelectors/getCartTotalsSelector';
import getCurrentCartSelector from '../../../../selectors/CartSelectors/getCurrentCartSelector';
import getSelectedPaymentMethodModuleSelector from '../../../../selectors/CheckoutSelectors/getSelectedPaymentMethodModuleSelector';
import getSelectedPaymentMethodNameSelector from '../../../../selectors/CheckoutSelectors/getSelectedPaymentMethodNameSelector';
import getStripeTokenSelector from '../../../../selectors/CheckoutSelectors/getStripeTokenSelector';
import getUserBillingAddressIdSelector from '../../../../selectors/ClientSelectors/getUserBillingAddressIdSelector';
import isLoggedUserBusinessTypeSelector from '../../../../selectors/ClientSelectors/isLoggedUserBusinessTypeSelector';
import isUserLoggedInSelector from '../../../../selectors/ClientSelectors/isUserLoggedInSelector';
import { orange } from '../../../../../constants/ThemeConstants';
import roundNumber from './../../../../../helpers/roundNumber';
import submitOrderAction from './../../../../actions/OrdersActions/submitOrderAction';

export default function* submitOrderSaga() {
    try {
        const isUserLoggedIn = yield select(isUserLoggedInSelector);
        if (!isUserLoggedIn) throw new Error('Utente non loggato');
        const isLoggedUserBusinessType = yield select(
            isLoggedUserBusinessTypeSelector
        );
        const billingAddressId = yield select(getUserBillingAddressIdSelector);
        const currentCart = yield select(getCurrentCartSelector);
        if (currentCart) {
            const {
                total_products_wt,
                total_shipping_tax_excl,
                total_shipping,
                total_paid_tax_excl,
                total_paid_tax_incl
            } = yield select(getCartTotalsSelector);

            const paymentModule = yield select(
                getSelectedPaymentMethodModuleSelector
            );
            const paymentName = yield select(
                getSelectedPaymentMethodNameSelector
            );

            const order = {
                id_address_delivery: currentCart.id_address_delivery,
                id_address_invoice: isLoggedUserBusinessType
                    ? billingAddressId
                    : currentCart.id_address_invoice,
                id_cart: currentCart.id,
                id_currency: currentCart.id_currency,
                id_lang: currentCart.id_lang,
                id_customer: currentCart.id_customer,
                id_carrier: currentCart.id_carrier ? currentCart.id_carrier : 7,
                id_shop_group: '1',
                id_shop: '1',
                secure_key: currentCart.secure_key,
                module: paymentModule,
                payment: paymentName,
                recyclable: currentCart.recyclable,
                gift: currentCart.gift,
                gift_message: currentCart.gift_message,
                mobile_theme: currentCart.mobile_theme,
                total_discounts: '0.000000',
                total_discounts_tax_incl: '0.000000',
                total_discounts_tax_excl: '0.000000',
                total_paid: roundNumber(total_paid_tax_incl),
                total_paid_real: roundNumber(total_paid_tax_incl),
                total_products: roundNumber(total_products),
                total_products_wt: roundNumber(total_products_wt),
                total_paid_tax_excl: roundNumber(total_paid_tax_excl),
                total_paid_tax_incl: roundNumber(total_paid_tax_incl),
                total_shipping: roundNumber(total_shipping),
                total_shipping_tax_incl: roundNumber(total_shipping),
                total_shipping_tax_excl: roundNumber(total_shipping_tax_excl),
                carrier_tax_rate: '22.000',
                total_wrapping: '0.000000',
                total_wrapping_tax_incl: '0.000000',
                total_wrapping_tax_excl: '0.000000',
                conversion_rate: '1.000000',
                associations: {
                    order_rows: orderRows
                }
            };
            const token = yield select(getStripeTokenSelector);
            if (token) order['token'] = token;

            const result = yield call(createOrderCall, order);
            if (result && result.order) {
                NavigatorRef.reset({
                    index: 1,
                    routes: [
                        { name: ROUTE_NAME_HOME },
                        { name: ROUTE_NAME_ORDERS },
                        {
                            name: ROUTE_NAME_ORDER,
                            params: { id: result.order.id }
                        }
                    ]
                });
                Snackbar.show({
                    text: `Ordine effettuato con successo.`,
                    duration: Snackbar.LENGTH_INDEFINITE,
                    action: {
                        text: 'OK',
                        textColor: orange.toString(),
                        onPress: () => Snackbar.dismiss()
                    }
                });
                yield put(
                    submitOrderAction({
                        success: true,
                        order: {
                            item: {
                                [result.order.id]: result.order
                            },
                            id: result.order.id
                        }
                    })
                );
            }
        }
    } catch (error) {
        yield put(submitOrderAction({ error }));
    }
}
