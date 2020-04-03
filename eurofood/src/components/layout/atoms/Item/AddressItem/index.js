import ItemOuter from './ItemOuter';
import React from 'react';
import Touchable from './../../Button/Touchable';
import { TouchableHighlight } from 'react-native';

const AddressItem = ({ item, onPress, isSelected }) => {
    if (!onPress) return <ItemOuter item={item} isSelected={isSelected} />;
    return (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#00000000"
            onPress={onPress}>
            <ItemOuter item={item} isSelected={isSelected} />
        </TouchableHighlight>
    );
};

export default AddressItem;
