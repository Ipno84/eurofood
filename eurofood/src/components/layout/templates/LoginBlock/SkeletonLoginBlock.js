import AnimatedLinearGradient from '../../atoms/AnimatedLinearGradient';
import React from 'react';
import styled from 'styled-components/native';

const SkeletonLoginBlock = () => {
    return (
        <Wrapper>
            <Title>
                <AnimatedLinearGradient />
            </Title>
            <Button>
                <AnimatedLinearGradient />
            </Button>
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

export default SkeletonLoginBlock;

const Wrapper = styled.View`
    margin-top: 16px;
    background-color: ${({ theme }) => theme.colors.white(1)};
    shadow-color: ${({ theme }) => theme.colors.alterGray(1)};
    shadow-offset: 0 0;
    shadow-opacity: 1;
    shadow-radius: 6px;
    elevation: 5;
`;

const Title = styled.View`
    height: 48px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 90%;
`;

const Button = styled.View`
    height: 40px;
    padding-left: 16px;
    padding-right: 16px;
`;

const BottomButton = styled.View`
    height: 40px;
    width: 100%;
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
