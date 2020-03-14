import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import Styled from './styled';
import { TouchableOpacity } from 'react-native';
import { orange } from './../../../../constants/ThemeConstants';

const HeaderButton = ({ isLeft, name, onPress }) => {
    return (
        <Styled isLeft={isLeft} onPress={onPress}>
            <Icon size={28} name={name} color={orange.toString()} />
        </Styled>
    );
};

export default HeaderButton;
