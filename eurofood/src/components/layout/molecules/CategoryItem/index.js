import CircleImage from './../../atoms/Image/CircleImage';
import ItemTitle from './../../atoms/Text/ItemTitle';
import React from 'react';
import Touchable from './../../atoms/Button/Touchable';
import Wrapper from './../../atoms/Item/Wrapper';

const CategoryItem = ({ onPress, image, name }) => {
    return (
        <Touchable onPress={onPress}>
            <Wrapper>
                <CircleImage resizeMode="contain" source={image} />
                <ItemTitle>{name}</ItemTitle>
            </Wrapper>
        </Touchable>
    );
};

export default CategoryItem;
