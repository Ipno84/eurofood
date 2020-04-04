import React from 'react';
import Text from './Text';
import Wrapper from './Wrapper';
import getProductItemShortDescriptionSelector from './../../../../../../state/selectors/ProductsSelectors/getProductItemShortDescriptionSelector';
import { useSelector } from 'react-redux';

const ProductDescription = ({ id }) => {
    const description = useSelector(state =>
        getProductItemShortDescriptionSelector(state, id)
    );
    return (
        <Wrapper>
            <Text>{description}</Text>
        </Wrapper>
    );
};

export default ProductDescription;
