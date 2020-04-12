import React from 'react';
import { TouchableNativeFeedback } from 'react-native';

const Touchable = ({ style, ...props }) => {
    return (
        <TouchableNativeFeedback {...props}>
            {props.children}
        </TouchableNativeFeedback>
    );
};

export default Touchable;
