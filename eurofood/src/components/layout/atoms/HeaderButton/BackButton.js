import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';
import React from 'react';
import Styled from './styled';
import Touchable from './../Button/Touchable';
import { orange } from './../../../../constants/ThemeConstants';
import useAppNavigation from '../../../../hooks/navigation/useAppNavigation';

const BackButton = () => {
    const { goBack } = useAppNavigation();
    const name = Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back';
    return (
        <Touchable onPress={() => goBack()}>
            <Styled>
                <Icon size={28} name={name} color={orange.toString()} />
            </Styled>
        </Touchable>
    );
};

export default BackButton;
