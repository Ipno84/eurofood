import { Image } from 'react-native';
import React from 'react';
import { logo } from './../../../../assets/images';

const Logo = () => {
    return (
        <Image
            resizeMode="contain"
            style={{ width: 180, height: 50 }}
            source={logo}
        />
    );
};

export default Logo;
