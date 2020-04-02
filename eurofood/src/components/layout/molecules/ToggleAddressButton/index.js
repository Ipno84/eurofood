import React from 'react';
import SelectAddressText from './../../atoms/Text/SelectAddressText';
import Touchable from './../../atoms/Button/Touchable';
import WrapperButton from './../../atoms/Wrapper/WrapperButton';

const ToggleAddressButton = ({ onPress, children }) => {
    return (
        <Touchable onPress={onPress}>
            <WrapperButton>
                <SelectAddressText>{children}</SelectAddressText>
            </WrapperButton>
        </Touchable>
    );
};

export default ToggleAddressButton;
