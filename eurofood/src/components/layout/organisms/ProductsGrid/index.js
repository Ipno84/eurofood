import { FlatGrid } from 'react-native-super-grid';
import ProductCard from '../../molecules/ProductCard';
import React from 'react';
import SectionTitle from '../../atoms/Text/SectionTitle';
import StyledFlatGrid from './styled';
import { screenWidth } from './../../../../constants/ThemeConstants';

const ProductsGrid = ({ sectionTitle, products, isHalf }) => {
    return (
        <>
            <SectionTitle>{sectionTitle}</SectionTitle>
            <StyledFlatGrid
                itemDimension={screenWidth / 3}
                items={products}
                spacing={8}
                renderItem={({ item }) => (
                    <ProductCard
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        isHalf={isHalf}
                    />
                )}
            />
        </>
    );
};

export default ProductsGrid;
