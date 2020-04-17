import Description from './Description';
import Line from './Line';
import React from 'react';
import Wrapper from './Wrapper';
import getProductItemDescriptionSelector from './../../../../../../state/selectors/ProductsSelectors/getProductItemDescriptionSelector';
import { useSelector } from 'react-redux';

const ProductLongDescription = ({ id }) => {
    const description = useSelector(state =>
        getProductItemDescriptionSelector(state, id)
    );
    if (!description) return null;
    return (
        <Wrapper>
            <Line />
            <Description description={description} />
        </Wrapper>
    );
};

export default ProductLongDescription;
