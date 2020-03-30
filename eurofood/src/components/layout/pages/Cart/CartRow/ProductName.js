import React from 'react';
import getProductItemNameSelector from './../../../../../state/selectors/ProductsSelectors/getProductItemNameSelector';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';

const ProductName = ({ id }) => {
    const name = useSelector(state => getProductItemNameSelector(state, id));
    return <Text>{name}</Text>;
};

export default ProductName;

const Text = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto(700, false, true)};
    font-size: 18px;
`;
