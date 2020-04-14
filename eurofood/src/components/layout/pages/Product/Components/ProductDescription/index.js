import React from 'react';
import Text from './Text';
import Wrapper from './Wrapper';
import getProductItemDescriptionSelector from './../../../../../../state/selectors/ProductsSelectors/getProductItemDescriptionSelector';
import getProductItemShortDescriptionSelector from './../../../../../../state/selectors/ProductsSelectors/getProductItemShortDescriptionSelector';
import { useSelector } from 'react-redux';

const ProductDescription = ({ id, long }) => {
    const shortDescription = useSelector(state =>
        getProductItemShortDescriptionSelector(state, id)
    );
    const description = useSelector(state =>
        getProductItemDescriptionSelector(state, id)
    );
    return (
        <Wrapper>
            <Text>{long ? description : shortDescription}</Text>
        </Wrapper>
    );
};

export default ProductDescription;
