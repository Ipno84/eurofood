import ProductNameWrapper from './ProductNameWrapper';
import React from 'react';
import Styled from './styled';
import getProductItemNameSelector from '../../../../../../state/selectors/ProductsSelectors/getProductItemNameSelector';
import { useSelector } from 'react-redux';

const ProductName = ({ id }) => {
    const productName = useSelector(state =>
        getProductItemNameSelector(state, id)
    );
    return (
        <ProductNameWrapper>
            {productName ? <Styled>{productName}</Styled> : null}
        </ProductNameWrapper>
    );
};

export default ProductName;
