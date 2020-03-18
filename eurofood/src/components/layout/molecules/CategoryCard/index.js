import ImageLeft from './ImageLeft';
import ImageRight from './ImageRight';
import ImageRightContainer from './ImageRightContainer';
import Left from './Left';
import React from 'react';
import Right from './Right';
import RightTextContainer from './RightTextContainer';
import Styled from './styled';
import Text from './Text';
import Touchable from './../../atoms/Button/Touchable';

const CategoryCard = ({ title, imageLeft, imageRight, onPress }) => {
    return (
        <Touchable onPress={onPress}>
            <Styled>
                <Left>
                    <ImageLeft resizeMode="cover" source={imageLeft} />
                </Left>
                <Right>
                    <ImageRightContainer>
                        <ImageRight resizeMode="contain" source={imageRight} />
                    </ImageRightContainer>
                    <RightTextContainer>
                        <Text numberOfLines={1}>{title.toLowerCase()}</Text>
                    </RightTextContainer>
                </Right>
            </Styled>
        </Touchable>
    );
};

export default CategoryCard;
