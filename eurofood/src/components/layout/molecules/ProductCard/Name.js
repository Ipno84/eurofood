import ProductName from '../../atoms/Card/ProductName';
import ProductNameWrapper from '../../atoms/Card/ProductNameWrapper';
import React from 'react';
import getProductItemNameSelector from './../../../../state/selectors/ProductsSelectors/getProductItemNameSelector';
import { useSelector } from 'react-redux';

const Name = ({ id }) => {
    const name = useSelector(state => getProductItemNameSelector(state, id));
    return (
        <ProductNameWrapper>
            <ProductName numberOfLines={2}>{name}</ProductName>
        </ProductNameWrapper>
    );
};

export default Name;
