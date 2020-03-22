import React, { memo } from 'react';

import { Text } from 'react-native';

const ProductItem = ({ name }) => {
    if (!name) return null;
    return (
        <Text style={{ fontSize: 22, padding: 16 }}>{name ? name : null}</Text>
    );
};

export default memo(ProductItem);
