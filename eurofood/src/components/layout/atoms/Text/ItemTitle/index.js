import React from 'react';
import Text from './Text';
import Wrapper from './Wrapper';

const ItemTitle = ({ children }) => {
    return (
        <Wrapper>
            <Text numberOfLines={2}>{children}</Text>
        </Wrapper>
    );
};

export default ItemTitle;
