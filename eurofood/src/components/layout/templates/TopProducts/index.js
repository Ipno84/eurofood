import { FlatList } from 'react-native';
import ListHeaderText from './../../atoms/Text/ListHeaderText';
import ProductLine from './../../molecules/ProductLine';
import React from 'react';
import Styled from './styled';
import Wrapper from './Wrapper';
import { product } from './../../../../assets/images/placeholder';

const products = [
    { name: 'Product 1', image: product, price: { regular: 10, offer: 9 } },
    { name: 'Product 2', image: product, price: { regular: 10, offer: 9 } },
    { name: 'Product 3', image: product, price: { regular: 10, offer: 9 } },
    { name: 'Product 4', image: product, price: { regular: 10, offer: 9 } },
    { name: 'Product 5', image: product, price: { regular: 10, offer: 9 } },
];

const TopProducts = ({ label }) => {
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
                            onPress={() => alert(item.name)}
                        />
                    )}
                />
            </Wrapper>
        </Styled>
    );
};

export default TopProducts;
