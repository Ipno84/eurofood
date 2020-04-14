import React from 'react';
import { TouchableOpacity } from 'react-native';

const Touchable = props => {
    return <TouchableOpacity {...props}>{props.children}</TouchableOpacity>;
};

export default Touchable;
