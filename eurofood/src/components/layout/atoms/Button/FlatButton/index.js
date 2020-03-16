import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import Styled from './styled';
import Text from './Text';
import getColor from './../../../../../helpers/getColor';

const FlatButton = ({ children, onPress, darkOrange }) => {
    return (
        <Styled onPress={onPress}>
            <Text darkOrange={darkOrange}>{children}</Text>
            <Icon
                name="chevron-right"
                size={24}
                color={getColor({ darkOrange })}
            />
        </Styled>
    );
};

export default FlatButton;
