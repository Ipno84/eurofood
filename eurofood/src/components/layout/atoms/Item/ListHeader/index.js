import React from 'react';
import Styled from './styled';
import Touchable from './../../Button/Touchable';

const ListHeader = ({ onPress }) => {
    return (
        <Touchable onPress={onPress}>
            <Styled />
        </Touchable>
    );
};

export default ListHeader;
