import Badge from './../Badge';
import BadgeWrapper from './../Badge/BadgeWrapper';
import PriceWrapper from './PriceWrapper';
import React from 'react';
import RegularPrice from './RegularPrice';
import SalePrice from './SalePrice';
import fixPrice from '../../../../../../helpers/fixPrice';
import getProductPriceInfoSelector from '../../../../../../state/selectors/ProductsSelectors/getProductPriceInfoSelector';
import { useSelector } from 'react-redux';

const PriceContainer = ({ id }) => {
    const priceInfo = useSelector(state =>
        getProductPriceInfoSelector(state, id)
    );
    return (
        <PriceWrapper>
            {priceInfo && priceInfo.sale && priceInfo.sale.price ? (
                <>
                    <SalePrice>
                        {fixPrice(priceInfo.sale.price, true, 2, true)} €
                    </SalePrice>
                    <RegularPrice>
                        {fixPrice(priceInfo.regularPrice, true, 2, true)} €
                    </RegularPrice>
                </>
            ) : (
                <RegularPrice>
                    {fixPrice(priceInfo.regularPrice, true, 2, true)} €
                </RegularPrice>
            )}
            {priceInfo && priceInfo.sale && priceInfo.sale.reduction ? (
                <Badge id={id} />
            ) : null}
        </PriceWrapper>
    );
};

export default PriceContainer;
