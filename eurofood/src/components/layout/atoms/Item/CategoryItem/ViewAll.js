import React from 'react';
import Right from './Right';
import Text from './Text';
import Touchable from './../../Button/Touchable';
import WrapperItem from './WrapperItem';

const ViewAll = ({ onPress, children }) => {
    return (
        <Touchable onPress={onPress}>
            <WrapperItem>
                <Right center={true}>
                    <Text numberOfLines={1}>{children}</Text>
                </Right>
            </WrapperItem>
        </Touchable>
    );
};

export default ViewAll;
