import ItemText from './ItemText';
import React from 'react';
import Touchable from './../../Button/Touchable';
import { View } from 'react-native';

const ListItem = ({ text, onPress }) => (
    <View style={{ backgroundColor: 'white' }}>
        <Touchable onPress={onPress}>
            <ItemText>{text}</ItemText>
        </Touchable>
    </View>
);

export default ListItem;
