import React from 'react';
import Text from './Text';
import generateTemplate from './../../../../../../helpers/generateTemplate';

const Description = ({ description }) => {
    if (typeof description === 'string') {
        return <Text>{description}</Text>;
    } else if (typeof description === 'object') {
        return generateTemplate(description);
    }
    return null;
};

export default Description;
