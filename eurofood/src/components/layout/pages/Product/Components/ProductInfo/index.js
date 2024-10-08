import Container from './Container';
import Label from './Label';
import React from 'react';
import Value from './Value';
import Wrapper from './Wrapper';
import getProductItemReferenceSelector from './../../../../../../state/selectors/ProductsSelectors/getProductItemReferenceSelector';
import getProductStockQuantitySelector from './../../../../../../state/selectors/ProductsSelectors/getProductStockQuantitySelector';
import useProductStockQuantity from './../../../../../../hooks/products/useProductStockQuantity';
import { useSelector } from 'react-redux';

const ProductInfo = ({ id }) => {
    const quantity = useProductStockQuantity(id);
    const reference = useSelector(state =>
        getProductItemReferenceSelector(state, id)
    );
    return (
        <Container>
            <Wrapper>
                <Label>Riferimento</Label>
                <Value>{reference}</Value>
            </Wrapper>
            <Wrapper>
                <Label>In magazzino</Label>
                <Value>
                    {quantity} {quantity === 1 ? 'articolo' : 'articoli'}
                </Value>
            </Wrapper>
        </Container>
    );
};

export default ProductInfo;
