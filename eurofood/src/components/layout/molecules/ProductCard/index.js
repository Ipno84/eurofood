import Icon from 'react-native-vector-icons/MaterialIcons';
import ProductImage from '../../atoms/Card/ProductImage';
import ProductImageWrapper from '../../atoms/Card/ProductImageWrapper';
import ProductName from '../../atoms/Card/ProductName';
import ProductNameWrapper from '../../atoms/Card/ProductNameWrapper';
import ProductPrice from '../../atoms/Card/ProductPrice';
import ProductPriceWrapper from '../../atoms/Card/ProductPriceWrapper';
import ProductRatingWrapper from '../../atoms/Card/ProductRatingWrapper';
import ProductWrapper from '../../atoms/Card/ProductWrapper';
import React from 'react';
import Touchable from '../../atoms/Button/Touchable';
import generateArrayOfN from './../../../../helpers/generateArrayOfN';
import { gray } from './../../../../constants/ThemeConstants';

const ProductCard = ({
    name,
    image,
    price,
    inHorizontal,
    isFirst,
    onPress
}) => {
    return (
        <Touchable onPress={onPress}>
            <ProductWrapper inHorizontal={inHorizontal} isFirst={isFirst}>
                <ProductImageWrapper>
                    <ProductImage
                        resizeMethod="scale"
                        source={image}
                        resizeMode="contain"
                    />
                </ProductImageWrapper>
                <ProductNameWrapper>
                    <ProductName numberOfLines={2}>{name}</ProductName>
                </ProductNameWrapper>
                <ProductPriceWrapper>
                    <Price price={price} />
                </ProductPriceWrapper>
                <ProductRatingWrapper>
                    {generateArrayOfN(5).map((e, i) => (
                        <Icon
                            key={i}
                            size={14}
                            color={gray.toString()}
                            name="star"
                        />
                    ))}
                </ProductRatingWrapper>
            </ProductWrapper>
        </Touchable>
    );
};

export default ProductCard;

const Price = ({ price }) => {
    if (!price) return null;
    if (typeof price === 'object') {
        if (price.regular !== undefined && price.offer !== undefined) {
            return (
                <>
                    <ProductPrice>{price.offer.toFixed(2)} €</ProductPrice>
                    <ProductPrice strikedthrough={true}>
                        {price.regular.toFixed(2)} €
                    </ProductPrice>
                </>
            );
        }
        return <ProductPrice>{regular.toFixed(2)} €</ProductPrice>;
    }
    return <ProductPrice>{Number(price).toFixed(2)} €</ProductPrice>;
};
