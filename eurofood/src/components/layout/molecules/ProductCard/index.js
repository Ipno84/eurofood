import HalfWrapper from '../../atoms/Card/HalfWrapper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProductImage from '../../atoms/Card/ProductImage';
import ProductImageWrapper from '../../atoms/Card/ProductImageWrapper';
import ProductName from '../../atoms/Card/ProductName';
import ProductNameWrapper from '../../atoms/Card/ProductNameWrapper';
import ProductPrice from '../../atoms/Card/ProductPrice';
import ProductPriceWrapper from '../../atoms/Card/ProductPriceWrapper';
import ProductRatingWrapper from '../../atoms/Card/ProductRatingWrapper';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Wrapper from '../../atoms/Card/Wrapper';
import generateArrayOfN from './../../../../helpers/generateArrayOfN';
import { gray } from './../../../../constants/ThemeConstants';

const ProductCard = ({ name, image, price, isHalf }) => {
    const Container = isHalf ? HalfWrapper : Wrapper;
    return (
        <TouchableOpacity onPress={() => alert(name)}>
            <Container>
                <ProductImageWrapper>
                    <ProductImage
                        resizeMethod="scale"
                        source={image}
                        resizeMode="contain"
                    />
                </ProductImageWrapper>
                <ProductNameWrapper>
                    <ProductName>{name}</ProductName>
                </ProductNameWrapper>
                <ProductPriceWrapper>
                    <Price {...price} />
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
            </Container>
        </TouchableOpacity>
    );
};

export default ProductCard;

const Price = ({ regular, offer }) => {
    if (regular !== undefined && offer !== undefined) {
        return (
            <>
                <ProductPrice>{offer.toFixed(2)} €</ProductPrice>
                <ProductPrice strikedthrough={true}>
                    {regular.toFixed(2)} €
                </ProductPrice>
            </>
        );
    }
    return <ProductPrice>{regular.toFixed(2)}</ProductPrice>;
};
