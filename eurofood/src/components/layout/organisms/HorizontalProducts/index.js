import HorizontalList from './../../atoms/ScrollView/HorizontalList';
import HorizontalScollerContainer from './../../atoms/ScrollView/HorizontalScollerContainer';
import ProductCard from '../../molecules/ProductCard';
import { ROUTE_NAME_PRODUCT } from '../../../../constants/RouteConstants';
import React from 'react';
import SectionTitle from './../../atoms/Text/SectionTitle';
import { product } from './../../../../assets/images/placeholder';
import useAppNavigation from '../../../../hooks/useAppNavigation';

const products = [
    { name: 'Product 1', image: product, price: { regular: 10, offer: 9 } },
    { name: 'Product 2', image: product, price: { regular: 10, offer: 9 } },
    { name: 'Product 3', image: product, price: { regular: 10, offer: 9 } },
    { name: 'Product 4', image: product, price: { regular: 10, offer: 9 } },
];

const HorizontalProducts = ({ sectionTitle }) => {
    const { navigate } = useAppNavigation();
    return (
        <HorizontalScollerContainer>
            <SectionTitle>{sectionTitle}</SectionTitle>
            <HorizontalList
                data={products}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: 18,
                    paddingRight: 16,
                    paddingBottom: 2,
                }}
                renderItem={({ item, index }) => (
                    <ProductCard
                        isFirst={index === 0}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        inHorizontal={true}
                        onPress={() => navigate(ROUTE_NAME_PRODUCT)}
                    />
                )}
                keyExtractor={({ name }) => name}
            />
        </HorizontalScollerContainer>
    );
};

export default HorizontalProducts;
