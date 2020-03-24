import BadgeWrapper from './BadgeWrapper';
import React from 'react';
import Styled from './styled';
import getProductPriceInfoSelector from '../../../../../../state/selectors/ProductsSelectors/getProductPriceInfoSelector';
import { useSelector } from 'react-redux';

const Badge = ({ id, absolute = false }) => {
    const priceInfo = useSelector(state =>
        getProductPriceInfoSelector(state, id)
    );
    if (!priceInfo.sale) return null;
    return (
        <BadgeWrapper absolute={absolute}>
            <Styled>-{Math.floor(priceInfo.sale.reduction)}%</Styled>
        </BadgeWrapper>
    );
};

export default Badge;
