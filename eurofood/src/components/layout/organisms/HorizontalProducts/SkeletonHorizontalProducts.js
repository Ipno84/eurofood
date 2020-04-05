import AnimatedLinearGradient from '../../atoms/AnimatedLinearGradient';
import React from 'react';
import SkeletonProductCard from '../../molecules/ProductCard/SkeletonProductCard';
import styled from 'styled-components/native';

const SkeletonHorizontalProducts = () => {
    return (
        <Wrapper>
            <Title>
                <AnimatedLinearGradient />
            </Title>
            <Horizontal>
                <SkeletonProductCard fixed={147} />
                <SkeletonProductCard fixed={147} />
                <SkeletonProductCard fixed={147} />
            </Horizontal>
        </Wrapper>
    );
};

export default SkeletonHorizontalProducts;

const Wrapper = styled.View`
    height: 266px;
`;

const Title = styled.View`
    height: 32px;
    width: 35%;
    margin-left: 24px;
`;

const Horizontal = styled.View`
    flex: 1;
    flex-direction: row;
    padding-top: 12px;
    padding-left: 16px;
`;
