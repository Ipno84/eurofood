import Icon from 'react-native-vector-icons/MaterialIcons';
import IconWrapper from './../../atoms/Icon/IconWrapper';
import React from 'react';
import { alterGray } from './../../../../constants/ThemeConstants';

const SearchIcon = () => {
    return (
        <IconWrapper>
            <Icon name="search" size={28} color={alterGray.toString()} />
        </IconWrapper>
    );
};

export default SearchIcon;
