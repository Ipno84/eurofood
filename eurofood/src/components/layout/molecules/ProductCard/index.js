import Image from './Image';
import Name from './Name';
import Price from './Price';
import ProductWrapper from '../../atoms/Card/ProductWrapper';
import { ROUTE_NAME_PRODUCT } from '../../../../constants/RouteConstants';
import React from 'react';
import Touchable from '../../atoms/Button/Touchable';
import useAppNavigation from '../../../../hooks/navigation/useAppNavigation';

const ProductCard = ({ id, inHorizontal, isFirst }) => {
    const { navigate } = useAppNavigation();
    return (
        <Touchable onPress={() => navigate(ROUTE_NAME_PRODUCT, { id })}>
            <ProductWrapper inHorizontal={inHorizontal} isFirst={isFirst}>
                <Image id={id} />
                <Name id={id} />
                <Price id={id} />
            </ProductWrapper>
        </Touchable>
    );
};

export default ProductCard;
