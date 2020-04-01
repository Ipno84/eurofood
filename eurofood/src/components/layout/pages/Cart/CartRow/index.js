import { Text, View } from 'react-native';

import CartRowWrapper from './CartRowWrapper';
import Left from './Left';
import ProductImage from './ProductImage';
import ProductName from './ProductName';
import ProductPartialPrice from './ProductPartialPrice';
import ProductPrice from './ProductPrice';
import ProductQuantity from './ProductQuantity';
import { ROUTE_NAME_PRODUCT } from '../../../../../constants/RouteConstants';
import React from 'react';
import Right from './Right';
import Touchable from './../../../atoms/Button/Touchable';
import useAppNavigation from '../../../../../hooks/navigation/useAppNavigation';

const CartRow = ({ id_product }) => {
    const { navigate } = useAppNavigation();
    if (!id_product) return null;
    return (
        <Touchable
            onPress={() => navigate(ROUTE_NAME_PRODUCT, { id: id_product })}>
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
        </Touchable>
    );
};

export default CartRow;
