import ItemOuter from './ItemOuter';
import React from 'react';
import Touchable from './../../Button/Touchable';

const AddressItem = ({ item, onPress, isSelected }) => {
    if (!onPress) return <ItemOuter item={item} isSelected={isSelected} />;
    return (
        <Touchable onPress={onPress}>
            <ItemOuter item={item} isSelected={isSelected} />
        </Touchable>
    );
};

export default AddressItem;
