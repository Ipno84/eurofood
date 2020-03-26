import Italic from './Italic';
import PriceContainer from './PriceContainer';
import React from 'react';
import isProductItemActiveSelector from '../../../../../../state/selectors/ProductsSelectors/isProductItemActiveSelector';
import { useSelector } from 'react-redux';

const Price = ({ id }) => {
    const isProductItemActive = useSelector(state =>
        isProductItemActiveSelector(state, id)
    );
    if (!isProductItemActive) return null;
    return (
        <>
            <PriceContainer id={id} />
            <Italic>Tasse escluse</Italic>
        </>
    );
};

export default Price;
