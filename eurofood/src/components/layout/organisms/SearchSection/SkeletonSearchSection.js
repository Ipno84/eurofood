import AnimatedLinearGradient from './../../atoms/AnimatedLinearGradient';
import React from 'react';
import styled from 'styled-components/native';

const SkeletonSearchSection = () => {
    return (
        <Wrapper>
            <LeftBox>
                <AnimatedLinearGradient />
            </LeftBox>
        </Wrapper>
    );
};

export default SkeletonSearchSection;

const Wrapper = styled.View`
    height: 80px;    
    flex-direction: row;
`;

const LeftBox = styled.View`
    height: 48px;
    flex: 1;
`;

