import React from 'react';
import getProductItemFinalPartialPriceSelector from './../../../../../state/selectors/ProductsSelectors/getProductItemFinalPartialPriceSelector';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';

const ProductPartialPrice = ({ id }) => {
    const partialPrice = useSelector(state =>
        getProductItemFinalPartialPriceSelector(state, id)
    );
    return <Text>Total parziale: {partialPrice}€</Text>;
};

export default ProductPartialPrice;

const Text = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto(400, false, false)};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.alterGray(1)};
`;
