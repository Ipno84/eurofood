import Image from './Image';
import Name from './Name';
import Price from './Price';
import ProductWrapper from '../../atoms/Card/ProductWrapper';
import { ROUTE_NAME_PRODUCT } from '../../../../constants/RouteConstants';
import React from 'react';
import SkeletonProductCard from './SkeletonProductCard';
import Touchable from '../../atoms/Button/Touchable';
import { View } from 'react-native';
import useAppNavigation from '../../../../hooks/navigation/useAppNavigation';

const ProductCard = ({ id, inHorizontal, isFirst, isInRow }) => {
    const { navigate } = useAppNavigation();
    if (!id) return <SkeletonProductCard />;
    return (
        <View style={{ flex: 1, height: 220 }}>
            <Touchable onPress={() => navigate(ROUTE_NAME_PRODUCT, { id })}>
                <ProductWrapper
                    inHorizontal={inHorizontal}
                    isFirst={isFirst}
                    isInRow={isInRow}>
                    <Image id={id} />
                    <Name id={id} />
                    <Price id={id} />
                </ProductWrapper>
            </Touchable>
        </View>
    );
};

export default ProductCard;
