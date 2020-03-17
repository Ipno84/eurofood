import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import Styled from './styled';
import Text from './Text';
import { red } from './../../../../../constants/ThemeConstants';

const InfoItem = ({ icon, firstRow, secondRow }) => {
    return (
        <Styled>
            <Icon name={icon} color={red.toString()} size={48} />
            <Text isFirst={true}>{firstRow}</Text>
            <Text>{secondRow}</Text>
        </Styled>
    );
};

export default InfoItem;
