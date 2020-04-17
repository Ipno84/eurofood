import Description from './Description';
import React from 'react';
import Wrapper from './Wrapper';
import getProductItemShortDescriptionSelector from './../../../../../../state/selectors/ProductsSelectors/getProductItemShortDescriptionSelector';
import { useSelector } from 'react-redux';

const ProductShortDescription = ({ id }) => {
    const description = useSelector(state =>
        getProductItemShortDescriptionSelector(state, id)
    );
    if (!description) return null;
    return (
        <Wrapper>
            <Description description={description} />
        </Wrapper>
    );
};

export default ProductShortDescription;
