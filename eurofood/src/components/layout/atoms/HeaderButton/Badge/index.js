import React from 'react';
import Text from './Text';
import Wrapper from './Wrapper';
import getCartItemsQuantityCountSelector from './../../../../../state/selectors/CartSelectors/getCartItemsQuantityCountSelector';
import { useSelector } from 'react-redux';

const Badge = () => {
    const quantity = useSelector(state =>
        getCartItemsQuantityCountSelector(state)
    );
    if (!quantity) return null;
    return (
        <Wrapper>
            <Text>{quantity}</Text>
        </Wrapper>
    );
};

export default Badge;
