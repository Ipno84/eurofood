import styled, { css } from 'styled-components/native';

import React from 'react';
import { pixelDensity } from 'react-native-device-detection';
import useCategoryDefaultImage from '../../../../hooks/categories/useCategoryDefaultImage';

const Image = styled.Image`
    width: 75px;
    height: 75px;
    border-radius: 75px;
    overflow: hidden;
    ${({ isRemote, isDefault }) => {
        if (isDefault) {
            return css`
                transform: scale(1);
            `;
        } else if (isRemote) {
            return css`
                transform: scale(2.5);
            `;
        }
    }}
`;

const CircleImage = ({ id, resizeMode }) => {
    const {
        imageSource,
        onError,
        isRemote,
        isDefault
    } = useCategoryDefaultImage(id);
    return (
        <Image
            resizeMode={resizeMode}
            source={imageSource}
            onError={() => onError()}
            isRemote={isRemote}
            isDefault={isDefault}
        />
    );
};

export default CircleImage;
