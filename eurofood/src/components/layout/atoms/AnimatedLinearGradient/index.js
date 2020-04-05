import { Animated, Easing } from 'react-native';
import React, { useEffect, useState } from 'react';

import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

const AnimatedLinearGradient = () => {
    const [width, setWidth] = useState(0);
    let left = new Animated.Value(-200);
    const animateWidth = () => {
        Animated.loop(
            Animated.timing(left, {
                toValue: width + 200,
                duration: 2000,
                easing: Easing.ease,
                useNativeDriver: true
            }),
            { iterations: -1 }
        ).start();
    };
    useEffect(() => {
        animateWidth();
    }, [width]);
    return (
        <LinearGradient
            onLayout={e => setWidth(e.nativeEvent.layout.width)}
            colors={['#e2e2e2', '#e6e6e6']}
            style={{
                flex: 1,
                borderRadius: 4,
                positon: 'relative',
                overflow: 'hidden'
            }}>
            <Animated.View
                style={{
                    width: 20,
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    transform: [
                        {
                            translateX: left
                        }
                    ]
                }}>
                <Shimmer />
            </Animated.View>
        </LinearGradient>
    );
};

export default AnimatedLinearGradient;

const Shimmer = styled.View`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 50px;
    shadow-color: ${({ theme }) => theme.colors.alterGray(1)};
    shadow-offset: 0 0;
    shadow-opacity: 1;
    shadow-radius: 30px;
    elevation: 30;
`;
