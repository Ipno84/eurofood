import AnimatedLinearGradient from './../../atoms/AnimatedLinearGradient';
import React from 'react';
import SkeletonProductCard from '../../molecules/ProductCard/SkeletonProductCard';
import { isTablet } from 'react-native-device-detection';
import styled from 'styled-components/native';

const SkeletonCategorySection = () => {
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
                {isTablet ? (
                    <>
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
                    </>
                ) : null}
            </Row>
            <Row>
                <SkeletonProductCard isInRow={true} isFirst={true} />
                <SkeletonProductCard isInRow={true} isFirst={false} />
                {isTablet ? (
                    <>
                        <SkeletonProductCard isInRow={true} isFirst={true} />
                        <SkeletonProductCard isInRow={true} isFirst={false} />
                    </>
                ) : null}
            </Row>
            <BottomButton>
                <ButtonText>
                    <AnimatedLinearGradient />
                </ButtonText>
                <ButtonIcon>
                    <AnimatedLinearGradient />
                </ButtonIcon>
            </BottomButton>
        </Wrapper>
    );
};

export default SkeletonCategorySection;

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

const BottomButton = styled.View`
    height: 40px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white(1)};
    shadow-color: ${({ theme }) => theme.colors.alterGray(1)};
    shadow-offset: 0 0;
    shadow-opacity: 1;
    shadow-radius: 6px;
    elevation: 5;
    margin-top: 4px;
    position: relative;
`;

const ButtonText = styled.View`
    top: 8px;
    bottom: 8px;
    left: 24px;
    width: 60%;
    position: absolute;
`;

const ButtonIcon = styled.View`
    width: 20px;
    height: 20px;
    position: absolute;
    right: 36px;
    top: 10px;
`;
