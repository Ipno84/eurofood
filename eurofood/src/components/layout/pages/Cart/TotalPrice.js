import React from 'react';
import fixPrice from './../../../../helpers/fixPrice';
import getCurrentCartTotalPriceWithTaxesSelector from './../../../../state/selectors/CartSelectors/getCurrentCartTotalPriceWithTaxesSelector';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';

const TotalPrice = () => {
    const totalPrice = useSelector(state =>
        getCurrentCartTotalPriceWithTaxesSelector(state)
    );
    return <Text>Totale tasse incluse: {fixPrice(totalPrice, true, 2)}€</Text>;
};

export default TotalPrice;

const Text = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto(700, false, true)};
    font-size: 18px;
`;
