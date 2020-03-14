import Icon from 'react-native-vector-icons/MaterialIcons';
import Input from './../../atoms/Input';
import React from 'react';
import Styled from './styled';
import { alterGray } from './../../../../constants/ThemeConstants';

const SearchInput = () => {
    return (
        <Styled>
            <Icon name="search" size={24} color={alterGray.toString()} />
            <Input value={'TEST'} returnKeyType="search" />
        </Styled>
    );
};

export default SearchInput;
