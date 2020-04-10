import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import styled from 'styled-components/native';

const CheckBox = ({ value, tintColors }) => {
    const color = value ? tintColors['true'] : tintColors['false'];
    return (
        <Wrapper>
            <Icon
                name={value ? 'checkbox-marked' : 'checkbox-blank-outline'}
                size={26}
                color={color}
            />
        </Wrapper>
    );
};

export default CheckBox;

const Wrapper = styled.View`
    margin-top: 5px;
`;
