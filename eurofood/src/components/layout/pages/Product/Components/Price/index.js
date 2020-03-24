import Italic from './Italic';
import PriceContainer from './PriceContainer';
import React from 'react';

const Price = ({ id }) => {
    return (
        <>
            <PriceContainer id={id} />
            <Italic>Tasse escluse</Italic>
        </>
    );
};

export default Price;
