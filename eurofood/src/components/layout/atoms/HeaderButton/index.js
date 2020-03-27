import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import Styled from './styled';
import Touchable from './../Button/Touchable';
import { orange } from './../../../../constants/ThemeConstants';
import useAppNavigation from '../../../../hooks/navigation/useAppNavigation';

const HeaderButton = ({ isLeft, name, onPress, canGoBack }) => {
    const { goBack } = useAppNavigation();
    const Icon = isLeft && name.indexOf('back') > -1 ? Ionicons : MaterialIcons;
    const onPressAction = isLeft && canGoBack ? goBack : onPress;
    return (
        <Touchable onPress={onPressAction}>
            <Styled isLeft={isLeft}>
                <Icon size={28} name={name} color={orange.toString()} />
            </Styled>
        </Touchable>
    );
};

export default HeaderButton;
