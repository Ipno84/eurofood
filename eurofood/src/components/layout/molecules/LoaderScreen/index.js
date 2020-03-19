import FullScreen from './../../atoms/Wrapper/FullScreen';
import Logo from './../../atoms/Logo';
import React from 'react';
import { SafeAreaView } from 'react-native';

const LoaderScreen = () => {
    return (
        <SafeAreaView>
            <FullScreen center={true}>
                <Logo />
            </FullScreen>
        </SafeAreaView>
    );
};

export default LoaderScreen;
