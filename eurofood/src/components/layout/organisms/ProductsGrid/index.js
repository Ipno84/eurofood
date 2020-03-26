import ProductCard from '../../molecules/ProductCard';
import { ROUTE_NAME_PRODUCT } from '../../../../constants/RouteConstants';
import React from 'react';
import StyledFlatGrid from './styled';
import Title from './Title';
import { screenWidth } from './../../../../constants/ThemeConstants';
import useCategoryProducts from '../../../../hooks/products/useCategoryProducts';

const ProductsGrid = ({ id }) => {
    const { products } = useCategoryProducts(id);
    return (
        <>
            <Title id={id} />
            <StyledFlatGrid
                itemDimension={screenWidth / 3}
                items={products.slice(0, 4)}
                spacing={8}
                renderItem={({ item }) => {
                    if (!item) return null;
                    return <ProductCard id={item.id} />;
                }}
            />
        </>
    );
};

export default ProductsGrid;
