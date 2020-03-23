import CurrentPrice from './CurrentPrice';
import Image from './Image';
import InfoContainer from './InfoContainer';
import Left from './Left';
import Name from './Name';
import OldPrice from './OldPrice';
import PriceContainer from './PriceContainer';
import React from 'react';
import Right from './Right';
import Styled from './styled';
import Touchable from './../../atoms/Button/Touchable';

const ProductLine = ({ name, image, price, wholesale_price, odd, onPress }) => {
    return (
        <Touchable onPress={onPress}>
            <Styled odd={odd}>
                <Left>
                    <Image resizeMode="contain" source={image} />
                </Left>
                <Right>
                    <InfoContainer>
                        <Name>{name}</Name>
                        <PriceContainer>
                            <CurrentPrice>
                                {wholesale_price.toFixed(2)} €
                            </CurrentPrice>
                            <OldPrice>{price.toFixed(2)} €</OldPrice>
                        </PriceContainer>
                    </InfoContainer>
                </Right>
            </Styled>
        </Touchable>
    );
};

export default ProductLine;
