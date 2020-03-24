import Italic from './Italic';
import Price from './Price';
import React from 'react';

const PriceContainer = ({ price, wholesale_price, discountPercentage }) => {
    return (
        <>
            <Price
                price={price}
                wholesale_price={wholesale_price}
                discountPercentage={discountPercentage}
            />
            <Italic>Tasse escluse</Italic>
        </>
    );
};

export default PriceContainer;
