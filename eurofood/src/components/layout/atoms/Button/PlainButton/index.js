import React from 'react';
import Styled from './styled';
import Text from './Text';
import Touchable from './../Touchable';

const PlainButton = ({ children, onPress }) => {
    return (
        <Touchable onPress={onPress}>
            <Styled>
                <Text>{children}</Text>
            </Styled>
        </Touchable>
    );
};

export default PlainButton;
