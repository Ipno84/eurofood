import React from 'react';
import getProductItemFinalUnitPriceSelector from './../../../../../state/selectors/ProductsSelectors/getProductItemFinalUnitPriceSelector';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';

const ProductPrice = ({ id }) => {
    const finalPrice = useSelector(state =>
        getProductItemFinalUnitPriceSelector(state, id)
    );
    return <Text>Prezzo unitario: {finalPrice}€</Text>;
};

export default ProductPrice;

const Text = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto(700, false, false)};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.alterGray(1)};
`;
