import Image from './Image';
import Left from './Left';
import React from 'react';
import Right from './Right';
import Text from './Text';
import Touchable from './../../Button/Touchable';
import WrapperItem from './WrapperItem';

const CategoryItem = ({ id, image, name, onPress }) => {
    return (
        <Touchable onPress={onPress}>
            <WrapperItem>
                <Left>
                    <Image id={id} resizeMode="contain" />
                </Left>
                <Right>
                    <Text numberOfLines={1}>
                        {name ? name.toLowerCase() : ''}
                    </Text>
                </Right>
            </WrapperItem>
        </Touchable>
    );
};

export default CategoryItem;
