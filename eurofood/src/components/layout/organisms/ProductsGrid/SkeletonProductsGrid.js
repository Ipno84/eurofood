import AnimatedLinearGradient from './../../atoms/AnimatedLinearGradient';
import React from 'react';
import SkeletonProductCard from '../../molecules/ProductCard/SkeletonProductCard';
import styled from 'styled-components/native';

const SkeletonProductsGrid = () => {
    return (
        <Wrapper>
            <Title>
                <AnimatedLinearGradient />
            </Title>
            <Row>
                <SkeletonProductCard
                    isHorizontal={true}
                    isInRow={true}
                    isFirst={true}
                />
                <SkeletonProductCard
                    isHorizontal={true}
                    isInRow={true}
                    isFirst={false}
                />
            </Row>
            <Row>
                <SkeletonProductCard isInRow={true} isFirst={true} />
                <SkeletonProductCard isInRow={true} isFirst={false} />
            </Row>
        </Wrapper>
    );
};

export default SkeletonProductsGrid;

const Wrapper = styled.View``;

const Title = styled.View`
    width: 35%;
    height: 28px;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 4px;
`;

const Row = styled.View`
    padding-left: 16px;
    padding-right: 16px;
    flex-direction: row;
    margin-top: 4px;
    margin-bottom: 4px;
`;
