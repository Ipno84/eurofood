import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconWrapper from './../../Icon/IconWrapper';
import ItemText from './ItemText';
import ItemWrapper from './ItemWrapper';
import React from 'react';
import Touchable from './../../Button/Touchable';
import { dark } from './../../../../../constants/ThemeConstants';

const SelectItem = ({ id, options, onPress, isSelected }) => {
    return (
        <Touchable onPress={onPress}>
            <ItemWrapper>
                <ItemText>{options[id]}</ItemText>
                {isSelected ? (
                    <IconWrapper>
                        <Icon size={24} name="check" color={dark.toString()} />
                    </IconWrapper>
                ) : null}
            </ItemWrapper>
        </Touchable>
    );
};

export default SelectItem;
