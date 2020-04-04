import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import Styled from './styled';
import Touchable from './../Button/Touchable';
import { orange } from './../../../../constants/ThemeConstants';
import useAppNavigation from '../../../../hooks/navigation/useAppNavigation';

const BackButton = () => {
    const { toggleDrawer } = useAppNavigation();
    return (
        <Touchable onPress={() => toggleDrawer()}>
            <Styled>
                <Icon size={28} name="menu" color={orange.toString()} />
            </Styled>
        </Touchable>
    );
};

export default BackButton;
