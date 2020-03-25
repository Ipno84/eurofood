import React from 'react';
import Text from './Text';
import Wrapper from './Wrapper';
import getProductItemDescriptionSelector from './../../../../../../state/selectors/ProductsSelectors/getProductItemDescriptionSelector';
import { useSelector } from 'react-redux';

const ProductDescription = ({ id }) => {
    const description = useSelector(state =>
        getProductItemDescriptionSelector(state, id)
    );
    return (
        <Wrapper>
            <Text>{description}</Text>
        </Wrapper>
    );
};

export default ProductDescription;
