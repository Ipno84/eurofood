import Badge from './Badge';
import BadgeWrapper from './BadgeWrapper';
import PriceWrapper from './PriceWrapper';
import React from 'react';
import RegularPrice from './RegularPrice';
import WholesalePrice from './WholesalePrice';
import fixPrice from '../../../../../helpers/fixPrice';

const Price = ({ price, wholesale_price, discountPercentage }) => {
    return (
        <PriceWrapper>
            {wholesale_price ? (
                <>
                    <WholesalePrice>
                        {fixPrice(wholesale_price, true, 2, true)} €
                    </WholesalePrice>
                    <RegularPrice>
                        {fixPrice(price, true, 2, true)} €
                    </RegularPrice>
                </>
            ) : (
                <RegularPrice>{fixPrice(price, true, 2, true)} €</RegularPrice>
            )}
            {discountPercentage ? (
                <BadgeWrapper>
                    <Badge>-{discountPercentage}%</Badge>
                </BadgeWrapper>
            ) : null}
        </PriceWrapper>
    );
};

export default Price;
