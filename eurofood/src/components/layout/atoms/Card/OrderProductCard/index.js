import InfoLeft from './InfoLeft';
import InfoRight from './InfoRight';
import InfoWrapper from './InfoWrapper';
import ProductRowTitle from './ProductRowTitle';
import ProductRowWrapper from './ProductRowWrapper';
import { ROUTE_NAME_PRODUCT } from '../../../../../constants/RouteConstants';
import React from 'react';
import Text from './Text';
import Touchable from './../../Button/Touchable';
import fixPrice from './../../../../../helpers/fixPrice';
import useAppNavigation from '../../../../../hooks/navigation/useAppNavigation';

const OrderProductCard = ({ id, name, unitPrice, quantity }) => {
    const { navigate } = useAppNavigation();
    return (
        <Touchable onPress={() => navigate(ROUTE_NAME_PRODUCT, { id })}>
            <ProductRowWrapper>
                <ProductRowTitle>{name}</ProductRowTitle>
                <InfoWrapper>
                    <InfoLeft>
                        <Text>Prezzo unitario:</Text>
                    </InfoLeft>
                    <InfoRight>
                        <Text>
                            <Text>{fixPrice(unitPrice, true, 2)}€</Text>
                            <Text gray={true}> (tasse inc.)</Text>
                        </Text>
                    </InfoRight>
                </InfoWrapper>
                <InfoWrapper>
                    <InfoLeft>
                        <Text>Quantitá:</Text>
                    </InfoLeft>
                    <InfoRight>
                        <Text>{quantity}</Text>
                    </InfoRight>
                </InfoWrapper>
                <InfoWrapper>
                    <InfoLeft>
                        <Text>Prezzo totale:</Text>
                    </InfoLeft>
                    <InfoRight>
                        <Text>
                            <Text>
                                {fixPrice(unitPrice * quantity, true, 2)}€
                            </Text>
                            <Text gray={true}> (tasse inc.)</Text>
                        </Text>
                    </InfoRight>
                </InfoWrapper>
            </ProductRowWrapper>
        </Touchable>
    );
};

export default OrderProductCard;
