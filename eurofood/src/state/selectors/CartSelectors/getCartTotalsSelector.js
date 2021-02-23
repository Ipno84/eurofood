import * as math from 'mathjs';

import { createSelector } from 'reselect';
import getCurrentCartSelector from './getCurrentCartSelector';
import getProductItemNameSelector from '../ProductsSelectors/getProductItemNameSelector';
import getProductItemReferenceSelector from '../ProductsSelectors/getProductItemReferenceSelector';
import getProductPriceInfoSelector from '../ProductsSelectors/getProductPriceInfoSelector';
import getSelectedCarrierMethodPriceSelector from './../CheckoutSelectors/getSelectedCarrierMethodPriceSelector';
import getSelectedCarrierMethodTaxPercentageSelector from './../CheckoutSelectors/getSelectedCarrierMethodTaxPercentageSelector';

export default createSelector(
    [
        getCurrentCartSelector,
        getSelectedCarrierMethodPriceSelector,
        getSelectedCarrierMethodTaxPercentageSelector,
        state => state
    ],
    (currentCart, shipmentCost, shipmentTaxPercentage, state) => {
        if (
            !currentCart ||
            !currentCart.associations ||
            !currentCart.associations.cart_rows
        )
            return null;
        const orderRows = currentCart.associations.cart_rows.map(cart_row => {
            const {
                id_product,
                id_product_attribute,
                quantity,
                id_customization
            } = cart_row;
            const reference = getProductItemReferenceSelector(
                state,
                id_product
            );
            const name = getProductItemNameSelector(state, id_product);
            const priceInfo = getProductPriceInfoSelector(state, id_product);

            const productPrice = parseFloat(priceInfo.regularPrice).toFixed(6);

            const salePrice = priceInfo.sale
                ? parseFloat(priceInfo.sale.price).toFixed(6)
                : null;

            let priceWithTaxes =
                (salePrice ? parseFloat(salePrice) : parseFloat(productPrice)) +
                (salePrice ? parseFloat(salePrice) : parseFloat(productPrice)) *
                    (priceInfo.taxPercentage ? priceInfo.taxPercentage : 1);

            return {
                product_id: id_product,
                product_attribute_id: id_product_attribute,
                product_quantity: quantity,
                id_customization: id_customization ? id_customization : '0',
                product_ean13: '',
                product_isbn: '',
                product_upc: '',
                product_reference: reference,
                product_name: name,
                product_price: productPrice,
                unit_price_tax_excl: salePrice ? salePrice : productPrice,
                unit_price_tax_incl: parseFloat(priceWithTaxes).toFixed(6)
            };
        });
        const total_products = orderRows.reduce((total, cartItem) => {
            const { product_quantity, unit_price_tax_excl } = cartItem;
            const subTotal = math
                .chain(product_quantity)
                .multiply(unit_price_tax_excl)
                .done();
            return math
                .chain(total)
                .add(subTotal)
                .done();
        }, 0);
        const total_products_with_taxes = orderRows.reduce(
            (total, cartItem) => {
                const { product_quantity, unit_price_tax_incl } = cartItem;
                const subTotal = math
                    .chain(product_quantity)
                    .multiply(unit_price_tax_incl)
                    .done();
                return math
                    .chain(total)
                    .add(subTotal)
                    .done();
            },
            0
        );

        const totalProductsTaxes = total_products_with_taxes;
        const total_products_wt = total_products + totalProductsTaxes;
        const shipmentCostTaxes = shipmentCost * shipmentTaxPercentage;
        const total_shipping = shipmentCost + shipmentCostTaxes;
        const totalTaxes = totalProductsTaxes + shipmentCostTaxes;
        const total_paid_tax_excl = total_products + shipmentCost;
        const total_paid_tax_incl = total_products + shipmentCost + totalTaxes;

        return {
            total_products,
            total_products_wt,
            total_shipping_tax_excl: shipmentCost,
            total_shipping,
            total_paid_tax_excl,
            total_paid_tax_incl,
            totalTaxes,
            orderRows
        };
    }
);
