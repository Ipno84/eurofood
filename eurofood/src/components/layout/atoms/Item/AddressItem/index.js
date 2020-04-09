import CheckBox from '@react-native-community/checkbox';
import ItemOuter from './ItemOuter';
import React from 'react';
import { TouchableHighlight } from 'react-native';
import { orange } from './../../../../../constants/ThemeConstants';
import styled from 'styled-components/native';

const AddressItem = ({ item, onPress, isSelected }) => {
    if (!onPress) return <ItemOuter item={item} isSelected={isSelected} />;
    return (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#00000000"
            onPress={onPress}>
            <CheckWrapper>
                <CheckInner pointerEvents="none">
                    <CheckBox
                        value={isSelected}
                        tintColors={{
                            true: orange.toString(),
                            false: orange.toString()
                        }}
                        onChange={onPress}
                    />
                </CheckInner>
                <ItemOuter item={item} isSelected={isSelected} />
            </CheckWrapper>
        </TouchableHighlight>
    );
};

export default AddressItem;

const CheckWrapper = styled.View`
    flex-direction: row;
`;

const CheckInner = styled.View`
    margin-left: 12px;
    margin-right: -8px;
    margin-top: 2px;
`;
