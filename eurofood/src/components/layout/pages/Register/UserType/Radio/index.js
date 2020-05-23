import Label from './Label';
import RadioBorder from './RadioBorder';
import RadioSelection from './RadioSelection';
import React from 'react';
import Touchable from './../../../../atoms/Button/Touchable';
import Wrapper from './Wrapper';

const Radio = ({ label, active, onPress }) => {
    return (
        <Touchable onPress={onPress}>
            <Wrapper>
                <RadioBorder>{active ? <RadioSelection /> : null}</RadioBorder>
                {label ? <Label>{label}</Label> : null}
            </Wrapper>
        </Touchable>
    );
};

export default Radio;
