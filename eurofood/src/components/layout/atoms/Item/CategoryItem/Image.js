import styled, { css } from 'styled-components/native';

import React from 'react';
import useCategoryDefaultImage from '../../../../../hooks/categories/useCategoryDefaultImage';

const Img = styled.Image`
    height: 50px;
    width: 50px;
    ${({ isRemote }) =>
        isRemote &&
        css`
            transform: scale(2.5);
        `}
`;

const Image = ({ id, resizeMode }) => {
    const { imageSource, onError, isRemote } = useCategoryDefaultImage(id);
    return (
        <Img
            resizeMode={resizeMode}
            source={imageSource}
            onError={() => onError()}
            isRemote={isRemote}
        />
    );
};

export default Image;
