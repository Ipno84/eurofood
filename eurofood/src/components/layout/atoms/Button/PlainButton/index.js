import React from 'react';
import Styled from './styled';
import Text from './Text';

const PlainButton = ({ children, onPress }) => {
    return (
        <Styled onPress={onPress}>
            <Text>{children}</Text>
        </Styled>
    );
};

export default PlainButton;
