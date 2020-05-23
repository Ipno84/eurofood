import Label from './Label';
import RadioBorder from './RadioBorder';
import RadioSelection from './RadioSelection';
import React from 'react';
import Touchable from './../Button/Touchable';
import Wrapper from './Wrapper';

const RadioGroup = ({
    options,
    activeKey,
    ItemWrapper,
    ItemInner,
    onRadioPress
}) => {
    console.log('activeKey', activeKey);
    return options.map(option => {
        return (
            <ItemWrapper key={option.optionKey}>
                <Touchable onPress={() => onRadioPress && onRadioPress(option)}>
                    <ItemInner>
                        <Wrapper>
                            <RadioBorder>
                                {activeKey === option.optionKey ? (
                                    <RadioSelection />
                                ) : null}
                            </RadioBorder>
                            {option.optionLabel ? (
                                <Label>{option.optionLabel}</Label>
                            ) : null}
                        </Wrapper>
                    </ItemInner>
                </Touchable>
            </ItemWrapper>
        );
    });
};

export default RadioGroup;
