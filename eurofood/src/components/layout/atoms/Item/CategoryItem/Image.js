import styled, { css } from 'styled-components/native';

import React from 'react';
import useCategoryDefaultImage from '../../../../../hooks/categories/useCategoryDefaultImage';

const Img = styled.Image`
    height: 50px;
    width: 50px;
    ${({ isPlacehoder }) =>
        !isPlacehoder &&
        css`
            transform: scale(3);
        `}
`;

const Image = ({ id, resizeMode }) => {
    const { imageSource, onError } = useCategoryDefaultImage(id);
    return (
        <Img
            resizeMode={resizeMode}
            source={imageSource}
            onError={() => onError()}
            isPlacehoder={typeof imageSource === 'number'}
        />
    );
};

export default Image;
