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

const ProductLine = ({ name, image, price, odd }) => {
    return (
        <Styled odd={odd}>
            <Left>
                <Image resizeMode="contain" source={image} />
            </Left>
            <Right>
                <InfoContainer>
                    <Name>{name}</Name>
                    <PriceContainer>
                        <CurrentPrice>{price.offer.toFixed(2)} €</CurrentPrice>
                        <OldPrice>{price.regular.toFixed(2)} €</OldPrice>
                    </PriceContainer>
                </InfoContainer>
            </Right>
        </Styled>
    );
};

export default ProductLine;
