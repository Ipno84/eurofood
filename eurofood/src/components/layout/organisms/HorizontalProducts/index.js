import HorizontalList from './../../atoms/ScrollView/HorizontalList';
import HorizontalScollerContainer from './../../atoms/ScrollView/HorizontalScollerContainer';
import ProductCard from '../../molecules/ProductCard';
import React from 'react';
import SkeletonHorizontalProducts from './SkeletonHorizontalProducts';
import Title from './Title';
import useCategoryProducts from '../../../../hooks/products/useCategoryProducts';

const HorizontalProducts = ({ id, bgColor }) => {
    const {
        products,
        onProductsEndReached,
        isCategoryLoading
    } = useCategoryProducts(id);
    if ((!products || products.length === 0) && isCategoryLoading)
        return <SkeletonHorizontalProducts />;
    return (
        <HorizontalScollerContainer>
            {products && products.length > 0 ? <Title id={id} /> : null}
            <HorizontalList
                data={products}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 12,
                    paddingTop: 6,
                    paddingRight: 16,
                    paddingBottom: 2,
                    backgroundColor: bgColor ? bgColor : '#00000000'
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
