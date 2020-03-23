import { FlatList } from 'react-native';
import ListHeaderText from './../../atoms/Text/ListHeaderText';
import ProductLine from './../../molecules/ProductLine';
import { ROUTE_NAME_PRODUCT } from '../../../../constants/RouteConstants';
import React from 'react';
import Styled from './styled';
import Wrapper from './Wrapper';
import { product } from './../../../../assets/images/placeholder';
import useAppNavigation from '../../../../hooks/useAppNavigation';

const products = [
    { name: 'Product 1', image: product, price: 10, wholesale_price: 9 },
    { name: 'Product 2', image: product, price: 10, wholesale_price: 9 },
    { name: 'Product 3', image: product, price: 10, wholesale_price: 9 },
    { name: 'Product 4', image: product, price: 10, wholesale_price: 9 },
    { name: 'Product 5', image: product, price: 10, wholesale_price: 9 }
];

const TopProducts = ({ label }) => {
    const { navigate } = useAppNavigation();
    return (
        <Styled>
            <Wrapper>
                <FlatList
                    data={products}
                    ListHeaderComponent={() => (
                        <ListHeaderText>{label}</ListHeaderText>
                    )}
                    keyExtractor={item => item.name}
                    renderItem={({ item, index }) => (
                        <ProductLine
                            odd={index % 2 !== 0}
                            name={item.name}
                            image={item.image}
                            price={item.price}
                            wholesale_price={item.wholesale_price}
                            onPress={() => navigate(ROUTE_NAME_PRODUCT)}
                        />
                    )}
                />
            </Wrapper>
        </Styled>
    );
};

export default TopProducts;
