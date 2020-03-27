import ItemText from './ItemText';
import React from 'react';
import Touchable from './../../atoms/Button/Touchable';

const Item = ({ action, label, navigation }) => {
    return (
        <Touchable
            onPress={() =>
                action &&
                action({
                    navigate: navigation.navigate
                })
            }>
            <ItemText>{label}</ItemText>
        </Touchable>
    );
};

export default Item;
