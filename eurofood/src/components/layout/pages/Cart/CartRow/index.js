import { Text, View } from 'react-native';

import CartRowWrapper from './CartRowWrapper';
import Left from './Left';
import ProductImage from './ProductImage';
import ProductName from './ProductName';
import ProductPartialPrice from './ProductPartialPrice';
import ProductPrice from './ProductPrice';
import ProductQuantity from './ProductQuantity';
import React from 'react';
import Right from './Right';

const CartRow = ({ id_product }) => {
    return (
        <CartRowWrapper>
            <Left>
                <ProductImage id={id_product} />
            </Left>
            <Right>
                <ProductName id={id_product} />
                <ProductPrice id={id_product} />
                <ProductPartialPrice id={id_product} />
                <ProductQuantity id={id_product} />
            </Right>
        </CartRowWrapper>
    );
};

export default CartRow;
