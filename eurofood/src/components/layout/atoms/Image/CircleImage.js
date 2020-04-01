import styled, { css } from 'styled-components/native';

import React from 'react';
import useCategoryDefaultImage from '../../../../hooks/categories/useCategoryDefaultImage';

const Image = styled.Image`
    width: 75px;
    height: 75px;
    border-radius: 75px;
    overflow: hidden;
    ${({ isRemote }) =>
        isRemote &&
        css`
            transform: scale(2.5);
        `}
`;

const CircleImage = ({ id, resizeMode }) => {
    const { imageSource, onError, isRemote } = useCategoryDefaultImage(id);
    return (
        <Image
            resizeMode={resizeMode}
            source={imageSource}
            onError={() => onError()}
            isRemote={isRemote}
        />
    );
};

export default CircleImage;
