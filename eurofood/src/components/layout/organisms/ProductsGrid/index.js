import styled, { css } from 'styled-components/native';

import ProductCard from '../../molecules/ProductCard';
import React from 'react';
import SkeletonProductsGrid from './SkeletonProductsGrid';
import Title from './Title';
import useGridCategoryProducts from '../../../../hooks/products/useGridCategoryProducts';

const ProductsGrid = ({ id }) => {
    const { productsChunks, isCategoryLoading } = useGridCategoryProducts(id);
    if (isCategoryLoading && (!productsChunks || productsChunks.length === 0))
        return <SkeletonProductsGrid />;
    return (
        <>
            {productsChunks && productsChunks.length ? <Title id={id} /> : null}
            {productsChunks &&
                productsChunks.map((productsChunk, i) => {
                    return (
                        <Row key={i} isFirst={i === 0}>
                            {productsChunk.map(item => {
                                if (!item || typeof item !== 'object')
                                    return null;
                                return (
                                    <ProductCard
                                        key={item.id}
                                        isInRow={true}
                                        id={item.id}
                                    />
                                );
                            })}
                        </Row>
                    );
                })}
        </>
    );
};

export default ProductsGrid;

const Row = styled.View`
    flex-direction: row;
    padding-left: 16px;
    padding-right: 16px;
    ${({ isFirst }) =>
        isFirst &&
        css`
            padding-top: 16px;
        `}
`;
