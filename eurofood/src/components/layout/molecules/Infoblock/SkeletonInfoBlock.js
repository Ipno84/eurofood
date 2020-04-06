import AnimatedLinearGradient from '../../atoms/AnimatedLinearGradient';
import React from 'react';
import styled from 'styled-components/native';

const SkeletonInfoBlock = () => {
    return (
        <Wrapper>
            <Row>
                <Item>
                    <Icon>
                        <AnimatedLinearGradient />
                    </Icon>
                    <TextWrapper>
                        <Text>
                            <AnimatedLinearGradient />
                        </Text>
                        <Text>
                            <AnimatedLinearGradient />
                        </Text>
                    </TextWrapper>
                </Item>
                <Item>
                    <Icon>
                        <AnimatedLinearGradient />
                    </Icon>
                    <TextWrapper>
                        <Text>
                            <AnimatedLinearGradient />
                        </Text>
                        <Text>
                            <AnimatedLinearGradient />
                        </Text>
                    </TextWrapper>
                </Item>
            </Row>
            <Row>
                <Item>
                    <Icon>
                        <AnimatedLinearGradient />
                    </Icon>
                    <TextWrapper>
                        <Text>
                            <AnimatedLinearGradient />
                        </Text>
                        <Text>
                            <AnimatedLinearGradient />
                        </Text>
                    </TextWrapper>
                </Item>
                <Item>
                    <Icon>
                        <AnimatedLinearGradient />
                    </Icon>
                    <TextWrapper>
                        <Text>
                            <AnimatedLinearGradient />
                        </Text>
                        <Text>
                            <AnimatedLinearGradient />
                        </Text>
                    </TextWrapper>
                </Item>
            </Row>
        </Wrapper>
    );
};

export default SkeletonInfoBlock;

const Wrapper = styled.View`
    margin-bottom: 16px;
`;

const Row = styled.View`
    padding-left: 16px;
    padding-right: 16px;
    flex-direction: row;
    margin-top: 4px;
    margin-bottom: 4px;
`;

const Item = styled.View`
    height: 140px;
    background-color: ${({ theme }) => theme.colors.white(1)};
    shadow-color: ${({ theme }) => theme.colors.alterGray(1)};
    shadow-offset: 0 0;
    shadow-opacity: 1;
    shadow-radius: 6px;
    elevation: 5;
    flex: 1;
    border-radius: 4px;
    margin-left: 4px;
    margin-right: 4px;
    flex-direction: column;
`;

const Icon = styled.View`
    flex: 1;
    padding-left: 30%;
    padding-right: 30%;
    padding-top: 12px;
    padding-bottom: 12px;
`;

const TextWrapper = styled.View`
    flex: 1;
    padding-left: 32px;
    padding-right: 32px;

    justify-content: center;
`;

const Text = styled.View`
    height: 16px;
    margin-bottom: 4px;
`;
