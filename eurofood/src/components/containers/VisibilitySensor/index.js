import Progress from './../../layout/atoms/Progress';
import React from 'react';
import { View } from 'react-native';
import isHomeItemViewableSelector from './../../../state/selectors/SettingsSelectors/isHomeItemViewableSelector';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';

const VisibilitySensor = ({ children, keyCheck, height }) => {
    const isVisible = useSelector(state =>
        isHomeItemViewableSelector(state, keyCheck)
    );
    if (!isVisible && height)
        return (
            <SkeletonContainer style={{ height: height }}>
                <Progress />
            </SkeletonContainer>
        );
    return children;
};

export default VisibilitySensor;

const SkeletonContainer = styled.View`
    background-color: ${({ theme }) => theme.colors.white(1)};
    align-items: center;
    justify-content: center;
`;
