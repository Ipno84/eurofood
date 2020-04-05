import AnimatedLinearGradient from './../../atoms/AnimatedLinearGradient';
import React from 'react';
import styled from 'styled-components/native';

const SkeletonHomeBanner = () => {
    return (
        <Wrapper>
            <AnimatedLinearGradient />
        </Wrapper>
    );
};

export default SkeletonHomeBanner;

const Wrapper = styled.View`
    height: 230px;
`;
