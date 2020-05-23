import Label from './Label';
import RadioBorder from './RadioBorder';
import RadioSelection from './RadioSelection';
import React from 'react';
import Touchable from './../Button/Touchable';
import { View } from 'react-native';
import Wrapper from './Wrapper';

const RadioGroup = ({
    options,
    activeKey,
    ItemWrapper,
    ItemInner,
    onRadioPress
}) => {
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
                            {option.optionLabels ? (
                                <View>
                                    {option.optionLabels.map((e, i) => (
                                        <View key={e}>
                                            <Label
                                                bold={i === 0}
                                                italic={i === 2}>
                                                {e}
                                            </Label>
                                        </View>
                                    ))}
                                </View>
                            ) : null}
                        </Wrapper>
                    </ItemInner>
                </Touchable>
            </ItemWrapper>
        );
    });
};

export default RadioGroup;
