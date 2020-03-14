import AutoHeightImage from 'react-native-auto-height-image';
import { Dimensions } from 'react-native';
import React from 'react';

const Banner = ({ source }) => {
    const width = Dimensions.get('window').width;
    return <AutoHeightImage width={width} source={source} />;
};

export default Banner;
