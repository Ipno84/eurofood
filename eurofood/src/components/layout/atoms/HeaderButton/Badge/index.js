import React from 'react';
import Text from './Text';
import Wrapper from './Wrapper';
import getCurrentCartItemsQuantityCountSelector from './../../../../../state/selectors/CartSelectors/getCurrentCartItemsQuantityCountSelector';
import { useSelector } from 'react-redux';

const Badge = () => {
    const quantity = useSelector(state =>
        getCurrentCartItemsQuantityCountSelector(state)
    );
    if (!quantity) return null;
    return (
        <Wrapper>
            <Text>{quantity}</Text>
        </Wrapper>
    );
};

export default Badge;
