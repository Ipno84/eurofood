import AnimatedLinearGradient from './../../atoms/AnimatedLinearGradient';
import React from 'react';
import SkeletonCategoryItem from '../../molecules/CategoryItem/SkeletonCategoryItem';
import styled from 'styled-components/native';

const SkeletonMainSectionsHorizontal = () => {
    return (
        <Wrapper>
            <Title>
                <AnimatedLinearGradient />
            </Title>
            <HorizontalWrapper>
                <SkeletonCategoryItem />
                <SkeletonCategoryItem />
                <SkeletonCategoryItem />
                <SkeletonCategoryItem />
            </HorizontalWrapper>
        </Wrapper>
    );
};

export default SkeletonMainSectionsHorizontal;

const Wrapper = styled.View`
    height: 185px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: ${({ theme }) => theme.colors.white(1)};
`;

const Title = styled.View`
    height: 32px;
    width: 75%;
    margin-top: 16px;
    margin-left: 16px;
`;

const HorizontalWrapper = styled.View`
    flex-direction: row;
    flex: 1;
    padding-top: 16px;
    padding-bottom: 16px;
`;
