import AnimatedLinearGradient from './../../atoms/AnimatedLinearGradient';
import React from 'react';
import styled from 'styled-components/native';

const SkeletonSearchSection = () => {
    return (
        <Wrapper>
            <LeftBox>
                <AnimatedLinearGradient />
            </LeftBox>
            <RightBox>
                <AnimatedLinearGradient />
            </RightBox>
        </Wrapper>
    );
};

export default SkeletonSearchSection;

const Wrapper = styled.View`
    height: 80px;
    padding: 16px;
    flex-direction: row;
`;

const LeftBox = styled.View`
    height: 48px;
    margin-right: 8px;
    flex: 1;
`;

const RightBox = styled.View`
    width: 130px;
`;
