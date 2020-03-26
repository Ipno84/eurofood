import ProductPrice from '../../atoms/Card/ProductPrice';
import ProductPriceWrapper from '../../atoms/Card/ProductPriceWrapper';
import React from 'react';
import Text from './Text';
import fixPrice from '../../../../helpers/fixPrice';
import getProductPriceInfoSelector from './../../../../state/selectors/ProductsSelectors/getProductPriceInfoSelector';
import isProductItemActiveSelector from './../../../../state/selectors/ProductsSelectors/isProductItemActiveSelector';
import { useSelector } from 'react-redux';

const Price = ({ id }) => {
    const isProductItemActive = useSelector(state =>
        isProductItemActiveSelector(state, id)
    );
    const priceInfo = useSelector(state =>
        getProductPriceInfoSelector(state, id)
    );
    return (
        <ProductPriceWrapper>
            {isProductItemActive &&
            priceInfo &&
            priceInfo.sale &&
            priceInfo.sale.price ? (
                <>
                    <ProductPrice>
                        {fixPrice(priceInfo.sale.price, true, 2, true)} €
                    </ProductPrice>
                    <ProductPrice strikedthrough={true}>
                        {fixPrice(priceInfo.regularPrice, true, 2, true)} €
                    </ProductPrice>
                </>
            ) : isProductItemActive ? (
                <ProductPrice>
                    {fixPrice(priceInfo.regularPrice, true, 2, true)} €
                </ProductPrice>
            ) : (
                <Text>Non disponibile</Text>
            )}
        </ProductPriceWrapper>
    );
};

export default Price;
