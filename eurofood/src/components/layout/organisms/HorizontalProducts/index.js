import HorizontalList from './../../atoms/ScrollView/HorizontalList';
import HorizontalScollerContainer from './../../atoms/ScrollView/HorizontalScollerContainer';
import ProductCard from '../../molecules/ProductCard';
import React from 'react';
import Title from './Title';
import useCategoryProducts from '../../../../hooks/products/useCategoryProducts';

const HorizontalProducts = ({ id }) => {
    const { products, onProductsEndReached } = useCategoryProducts(id);
    return (
        <HorizontalScollerContainer>
            <Title id={id} />
            <HorizontalList
                data={products}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: 18,
                    paddingRight: 16,
                    paddingBottom: 2
                }}
                onEndReached={onProductsEndReached}
                renderItem={({ item, index }) => {
                    if (!item) return null;
                    return (
                        <ProductCard
                            id={item.id}
                            isFirst={index === 0}
                            inHorizontal={true}
                        />
                    );
                }}
                keyExtractor={(item, index) =>
                    item && item.id ? String(item.id) : String(index)
                }
            />
        </HorizontalScollerContainer>
    );
};

export default HorizontalProducts;
