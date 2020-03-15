import { SafeAreaView, ScrollView, Text } from 'react-native';

import Banner from '../../atoms/Banner';
import CategorySelector from '../../molecules/CategorySelector';
import { FlatGrid } from 'react-native-super-grid';
import ProductCard from '../../molecules/ProductCard';
import React from 'react';
import SearchContainer from '../../atoms/Container/SearchContainer';
import SearchInput from '../../molecules/SearchInput';
import SectionTitle from '../../atoms/Text/SectionTitle';
import { home } from './../../../../assets/images/banners';
import { product } from './../../../../assets/images/placeholder';
import { screenWidth } from './../../../../constants/ThemeConstants';

const Home = ({ navigation }) => {
    const superOffers = [
        { name: 'Product 1', image: product, price: { regular: 10, offer: 9 } },
        { name: 'Product 2', image: product, price: { regular: 10, offer: 9 } },
        { name: 'Product 3', image: product, price: { regular: 10, offer: 9 } },
        { name: 'Product 4', image: product, price: { regular: 10, offer: 9 } },
    ];
    return (
        <SafeAreaView>
            <ScrollView>
                <SearchContainer>
                    <SearchInput />
                    <CategorySelector />
                </SearchContainer>
                <Banner source={home} />
                <SectionTitle>Super Offerte</SectionTitle>
                <FlatGrid
                    itemDimension={screenWidth / 3}
                    items={superOffers}
                    style={{ flex: 1 }}
                    spacing={16}
                    renderItem={({ item }) => (
                        <ProductCard
                            name={item.name}
                            image={item.image}
                            price={item.price}
                            isHalf={true}
                        />
                    )}
                />
                <SectionTitle>Offerte</SectionTitle>
                <FlatGrid
                    itemDimension={screenWidth / 3}
                    items={superOffers}
                    style={{ flex: 1 }}
                    spacing={16}
                    renderItem={({ item }) => (
                        <ProductCard
                            name={item.name}
                            image={item.image}
                            price={item.price}
                            isHalf={true}
                        />
                    )}
                />
                <SectionTitle>
                    Simili ai prodotti che hai già acquistato
                </SectionTitle>
                <FlatGrid
                    itemDimension={screenWidth / 3}
                    items={superOffers}
                    style={{ flex: 1 }}
                    spacing={16}
                    renderItem={({ item }) => (
                        <ProductCard
                            name={item.name}
                            image={item.image}
                            price={item.price}
                            isHalf={true}
                        />
                    )}
                />
                <SectionTitle>I piú venduti</SectionTitle>
                <FlatGrid
                    itemDimension={screenWidth / 3}
                    items={superOffers}
                    style={{ flex: 1 }}
                    spacing={16}
                    renderItem={({ item }) => (
                        <ProductCard
                            name={item.name}
                            image={item.image}
                            price={item.price}
                            isHalf={true}
                        />
                    )}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
