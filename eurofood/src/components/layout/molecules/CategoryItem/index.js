import CircleImage from './../../atoms/Image/CircleImage';
import ItemTitle from './../../atoms/Text/ItemTitle';
import React from 'react';
import Touchable from './../../atoms/Button/Touchable';
import Wrapper from './../../atoms/Item/Wrapper';

const CategoryItem = ({ id, onPress, name }) => {
    return (
        <Touchable onPress={onPress}>
            <Wrapper>
                <CircleImage id={id} resizeMode="contain" />
                <ItemTitle>{name}</ItemTitle>
            </Wrapper>
        </Touchable>
    );
};

export default CategoryItem;
