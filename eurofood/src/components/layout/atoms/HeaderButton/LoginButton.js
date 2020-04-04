import Badge from './Badge';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ROUTE_NAME_LOGIN } from '../../../../constants/RouteConstants';
import React from 'react';
import Styled from './styled';
import Touchable from './../Button/Touchable';
import View from './View';
import { orange } from './../../../../constants/ThemeConstants';
import useAppNavigation from '../../../../hooks/navigation/useAppNavigation';

const LoginButton = ({ navigation }) => {
    const { navigate } = useAppNavigation();
    return (
        <Touchable
            onPress={() => {
                navigate(ROUTE_NAME_LOGIN);
            }}>
            <View>
                <Styled>
                    <Icon
                        size={28}
                        name="account-outline"
                        color={orange.toString()}
                    />
                </Styled>
                <Badge />
            </View>
        </Touchable>
    );
};

export default LoginButton;
