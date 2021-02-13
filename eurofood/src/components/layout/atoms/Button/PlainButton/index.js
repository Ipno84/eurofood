import React from 'react';
import Styled from './styled';
import Text from './Text';
import Touchable from './../Touchable';

const PlainButton = ({ children, onPress, disabled, left }) => {
    return (
        <Touchable onPress={onPress}>
            <Styled disabled={disabled}>
                {left && left()}
                <Text>{children}</Text>
            </Styled>
        </Touchable>
    );
};

export default PlainButton;
