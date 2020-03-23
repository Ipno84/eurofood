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
    id,
    name,
    image,
    price,
    wholesale_price,
    inHorizontal,
    isFirst,
    onPress,
    id_default_image
}) => {
    return (
        <Touchable onPress={onPress}>
            <ProductWrapper inHorizontal={inHorizontal} isFirst={isFirst}>
                <ProductImageWrapper>
                    <ProductImage
                        id={id}
                        id_default_image={id_default_image}
                        resizeMethod="scale"
                        source={image}
                        resizeMode="contain"
                    />
                </ProductImageWrapper>
                <ProductNameWrapper>
                    <ProductName numberOfLines={2}>{name}</ProductName>
                </ProductNameWrapper>
                <ProductPriceWrapper>
                    <Price price={price} wholesale_price={wholesale_price} />
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

const Price = ({ price, wholesale_price }) => {
    if (!price && !wholesale_price) return null;
    if (wholesale_price && parseFloat(wholesale_price)) {
        return (
            <>
                <ProductPrice>
                    {parseFloat(wholesale_price).toFixed(2)} €
                </ProductPrice>
                <ProductPrice strikedthrough={true}>
                    {parseFloat(price).toFixed(2)} €
                </ProductPrice>
            </>
        );
    }
    return <ProductPrice>{parseFloat(price).toFixed(2)} €</ProductPrice>;
};
