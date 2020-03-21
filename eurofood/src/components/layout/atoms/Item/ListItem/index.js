import ItemText from './ItemText';
import React from 'react';
import Touchable from './../../Button/Touchable';

const ListItem = ({ text, onPress }) => (
    <Touchable onPress={onPress}>
        <ItemText>{text}</ItemText>
    </Touchable>
);

export default ListItem;
