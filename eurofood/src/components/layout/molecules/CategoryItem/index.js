import CircleImage from './../../atoms/Image/CircleImage';
import ItemTitle from './../../atoms/Text/ItemTitle';
import React from 'react';
import Touchable from './../../atoms/Button/Touchable';
import Wrapper from './../../atoms/Item/Wrapper';

const CategoryItem = ({ onPress, image, title }) => {
    return (
        <Touchable onPress={onPress}>
            <Wrapper>
                <CircleImage resizeMode="contain" source={image} />
                <ItemTitle>{title}</ItemTitle>
            </Wrapper>
        </Touchable>
    );
};

export default CategoryItem;
