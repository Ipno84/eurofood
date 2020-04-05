import styled, { css } from 'styled-components/native';

import AnimatedLinearGradient from './../../atoms/AnimatedLinearGradient';
import React from 'react';

const SkeletonProductCard = ({ fixed }) => {
    return (
        <Wrapper fixed={fixed}>
            <Image>
                <AnimatedLinearGradient />
            </Image>
            <Name>
                <AnimatedLinearGradient />
            </Name>
            <Price>
                <AnimatedLinearGradient />
            </Price>
        </Wrapper>
    );
};

export default SkeletonProductCard;

const Wrapper = styled.View`
    border-radius: 8px;
    flex-direction: column;
    height: 210px;
    background-color: ${({ theme }) => theme.colors.white(1)};
    shadow-color: ${({ theme }) => theme.colors.alterGray(1)};
    shadow-offset: 0 0;
    shadow-opacity: 1;
    shadow-radius: 6px;
    elevation: 5;
    margin-left: 4px;
    margin-right: 4px;
    ${({ fixed }) =>
        fixed
            ? css`
                  width: ${fixed}px;
              `
            : css`
                  flex: 1;
              `}
`;

const Image = styled.View`
    flex: 5;
    padding: 8px;
`;
const Name = styled.View`
    flex: 2.5;
    padding: 8px;
    background-color: ${({ theme }) => theme.colors.lightGray(1)};
`;
const Price = styled.View`
    flex: 1;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 24px;
    padding-right: 24px;
`;
