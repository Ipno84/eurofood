import AutoHeightImage from 'react-native-auto-height-image';
import { Dimensions } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const Banner = ({ source }) => {
    /*const width = Dimensions.get('window').width;
    return <AutoHeightImage width={width} source={source} />;*/
    return <Image source={source} resizeMode="cover" />;
};

export default Banner;

const Image = styled.Image`
    width: 100%;
    height: 230px;
`;
