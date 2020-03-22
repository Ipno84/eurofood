import { ProgressViewIOS } from 'react-native';
import React from 'react';

const Progress = ({ color }) => {
    return <ProgressViewIOS progressTintColor={color} />;
};

export default Progress;
