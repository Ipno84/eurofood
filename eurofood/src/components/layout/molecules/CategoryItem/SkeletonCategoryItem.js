import AnimatedLinearGradient from './../../atoms/AnimatedLinearGradient';
import React from 'react';
import styled from 'styled-components/native';

const SkeletonCategoryItem = () => {
    return (
        <Wrapper>
            <Image>
                <AnimatedLinearGradient />
            </Image>
            <Text>
                <AnimatedLinearGradient />
            </Text>
        </Wrapper>
    );
};

export default SkeletonCategoryItem;

const Wrapper = styled.View`
    width: 75px;
    height: 100%;
    margin-left: 16px;
`;

const Image = styled.View`
    height: 75px;
    width: 100%;
    border-radius: 75px;
    overflow: hidden;
`;
const Text = styled.View`
    height: 20px;
    width: 100%;
    margin-top: 16px;
`;
