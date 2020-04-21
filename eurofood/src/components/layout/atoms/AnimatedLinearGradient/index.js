import { Animated, Easing } from 'react-native';
import React, { useEffect } from 'react';

import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

const AnimatedLinearGradient = () => {
    let opacity = new Animated.Value(0);
    const animateWidth = () => {
        Animated.loop(
            Animated.timing(opacity, {
                toValue: 2,
                duration: 1000,
                easing: Easing.ease,
                useNativeDriver: true
            }),
            { iterations: -1 }
        ).start();
    };
    useEffect(() => {
        animateWidth();
    }, []);
    return (
        <LinearGradient
            colors={['#e6e6e6', '#e9e9e9']}
            style={{
                flex: 1,
                borderRadius: 4,
                positon: 'relative',
                overflow: 'hidden'
            }}>
            <OpacityView
                style={{
                    opacity: opacity.interpolate({
                        inputRange: [0, 1, 2],
                        outputRange: [0, 1, 0]
                    })
                }}
            />
        </LinearGradient>
    );
};

export default AnimatedLinearGradient;

const OpacityView = Animated.createAnimatedComponent(styled.View`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.alterGray(0.6)};
`);
