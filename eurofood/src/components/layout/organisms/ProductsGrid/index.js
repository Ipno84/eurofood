import ProductCard from '../../molecules/ProductCard';
import { ROUTE_NAME_PRODUCT } from '../../../../constants/RouteConstants';
import React from 'react';
import SectionTitle from '../../atoms/Text/SectionTitle';
import StyledFlatGrid from './styled';
import { screenWidth } from './../../../../constants/ThemeConstants';
import useAppNavigation from './../../../../hooks/useAppNavigation';

const ProductsGrid = ({ sectionTitle, products }) => {
    const { navigate } = useAppNavigation();
    return (
        <>
            <SectionTitle>{sectionTitle}</SectionTitle>
            <StyledFlatGrid
                itemDimension={screenWidth / 3}
                items={products}
                spacing={8}
                renderItem={({ item }) => {
                    return (
                        <ProductCard
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            price={item.price}
                            wholesale_price={item.wholesale_price}
                            onPress={() => navigate(ROUTE_NAME_PRODUCT)}
                        />
                    );
                }}
            />
        </>
    );
};

export default ProductsGrid;
