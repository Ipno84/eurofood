import ButtonText from './ButtonText';
import React from 'react';
import Touchable from './../Touchable';

const FabButton = ({ onPress, children }) => {
    return (
        <Touchable onPress={onPress}>
            <ButtonText>{children}</ButtonText>
        </Touchable>
    );
};

export default FabButton;
