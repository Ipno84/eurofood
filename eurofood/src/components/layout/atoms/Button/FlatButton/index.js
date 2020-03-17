import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import Styled from './styled';
import Text from './Text';
import getColor from './../../../../../helpers/getColor';

const FlatButton = ({ children, shadow, onPress, darkOrange, azure }) => {
    return (
        <Styled onPress={onPress} shadow={shadow}>
            <Text darkOrange={darkOrange} azure={azure}>
                {children}
            </Text>
            <Icon
                name="chevron-right"
                size={24}
                color={getColor({ darkOrange, azure })}
            />
        </Styled>
    );
};

export default FlatButton;
