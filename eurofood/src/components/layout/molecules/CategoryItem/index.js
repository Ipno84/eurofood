import CircleImage from './../../atoms/Image/CircleImage';
import ItemTitle from './../../atoms/Text/ItemTitle';
import React from 'react';
import Wrapper from './../../atoms/Item/Wrapper';

const CategoryItem = ({ onPress, image, title }) => {
    return (
        <Wrapper onPress={onPress}>
            <CircleImage resizeMode="contain" source={image} />
            <ItemTitle>{title}</ItemTitle>
        </Wrapper>
    );
};

export default CategoryItem;
