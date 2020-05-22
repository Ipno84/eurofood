import * as math from 'mathjs';

import {
    ROUTE_NAME_HOME,
    ROUTE_NAME_ORDER,
    ROUTE_NAME_ORDERS
} from '../../../../../constants/RouteConstants';
import { all, call, put, select } from 'redux-saga/effects';

import NavigatorRef from './../../../../../helpers/NavigatorRef';
import Snackbar from 'react-native-snackbar';
import createOrderCall from './../../../../../api/calls/OrdersCall/createOrderCall';
import getCurrentCartSelector from '../../../../selectors/CartSelectors/getCurrentCartSelector';
import getProductItemNameSelector from '../../../../selectors/ProductsSelectors/getProductItemNameSelector';
import getProductItemReferenceSelector from '../../../../selectors/ProductsSelectors/getProductItemReferenceSelector';
import getProductPriceInfoSelector from '../../../../selectors/ProductsSelectors/getProductPriceInfoSelector';
import getUserBillingAddressIdSelector from '../../../../selectors/ClientSelectors/getUserBillingAddressIdSelector';
import isLoggedUserBusinessTypeSelector from '../../../../selectors/ClientSelectors/isLoggedUserBusinessTypeSelector';
import isUserLoggedInSelector from '../../../../selectors/ClientSelectors/isUserLoggedInSelector';
import { orange } from '../../../../../constants/ThemeConstants';
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
            const orderRows = yield all(
                currentCart.associations.cart_rows.map(function*(cart_row) {
                    const orderRow = yield call(getOrderRowData, cart_row);
                    return orderRow;
                })
            );
            const total_products = orderRows.reduce((total, cartItem) => {
                const subTotal = math
                    .chain(cartItem.product_quantity)
                    .multiply(cartItem.unit_price_tax_excl)
                    .done();
                return math
                    .chain(total)
                    .add(subTotal)
                    .done();
            }, 0);
            const totalProductsTaxes = total_products * 0.1;
            const total_products_wt = total_products + totalProductsTaxes;
            const shipmentCost = 3.5;
            const shipmentCostTaxes = shipmentCost * 0.22;
            const total_shipping = shipmentCost + shipmentCostTaxes;
            const totalTaxes = totalProductsTaxes + shipmentCostTaxes;
            const total_paid_tax_excl = total_products + shipmentCost;
            const total_paid_tax_incl =
                total_products + shipmentCost + totalTaxes;
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
                module: 'ps_cashondelivery',
                payment: 'Cash on delivery (COD)',
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
                total_shipping_tax_excl: roundNumber(shipmentCost),
                carrier_tax_rate: '22.000',
                total_wrapping: '0.000000',
                total_wrapping_tax_incl: '0.000000',
                total_wrapping_tax_excl: '0.000000',
                conversion_rate: '1.000000',
                associations: {
                    order_rows: orderRows
                }
            };
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

function* getOrderRowData(cart_row) {
    const reference = yield select(state =>
        getProductItemReferenceSelector(state, cart_row.id_product)
    );
    const name = yield select(state =>
        getProductItemNameSelector(state, cart_row.id_product)
    );
    const priceInfo = yield select(state =>
        getProductPriceInfoSelector(state, cart_row.id_product)
    );
    const productPrice = parseFloat(priceInfo.regularPrice).toFixed(6);
    const salePrice = priceInfo.sale
        ? parseFloat(priceInfo.sale.price).toFixed(6)
        : null;
    let priceWithTaxes =
        (salePrice ? parseFloat(salePrice) : parseFloat(productPrice)) +
        (salePrice ? parseFloat(salePrice) : parseFloat(productPrice)) * 0.1;
    return {
        product_id: cart_row.id_product,
        product_attribute_id: cart_row.id_product_attribute,
        product_quantity: cart_row.quantity,
        id_customization: cart_row.id_customization
            ? cart_row.id_customization
            : '0',
        product_ean13: '',
        product_isbn: '',
        product_upc: '',
        product_reference: reference,
        product_name: name,
        product_price: productPrice,
        unit_price_tax_excl: salePrice ? salePrice : productPrice,
        unit_price_tax_incl: parseFloat(priceWithTaxes).toFixed(6)
    };
}

function roundNumber(num) {
    return (Math.round((num + Number.EPSILON) * 100) / 100).toFixed(6);
}
