import ListSectionHeaderText from './ListSectionHeaderText';
import ListStickyHeader from './ListStickyHeader';
import React from 'react';

const ListHeader = ({ text, shasow }) => {
    return (
        <ListStickyHeader shadow={shasow}>
            <ListSectionHeaderText>{text}</ListSectionHeaderText>
        </ListStickyHeader>
    );
};

export default ListHeader;
