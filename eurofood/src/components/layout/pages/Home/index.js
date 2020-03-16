import { SafeAreaView, ScrollView } from 'react-native';

import Banner from '../../atoms/Banner';
import FlatButton from '../../atoms/Button/FlatButton';
import ProductsGrid from '../../organisms/ProductsGrid';
import React from 'react';
import SearchSection from '../../organisms/SearchSection';
import { home } from './../../../../assets/images/banners';
import { product } from './../../../../assets/images/placeholder';

const Home = ({ navigation }) => {
    const products = [
        { name: 'Product 1', image: product, price: { regular: 10, offer: 9 } },
        { name: 'Product 2', image: product, price: { regular: 10, offer: 9 } },
        { name: 'Product 3', image: product, price: { regular: 10, offer: 9 } },
        { name: 'Product 4', image: product, price: { regular: 10, offer: 9 } },
    ];
    return (
        <SafeAreaView>
            <ScrollView>
                <SearchSection />
                <Banner source={home} />
                <ProductsGrid
                    sectionTitle="Super Offerte"
                    products={products}
                    isHalf={true}
                />
                <FlatButton
                    onPress={() => alert('Scopri tutte le offerte')}
                    darkOrange={true}>
                    Scopri tutte le offerte
                </FlatButton>
                <ProductsGrid
                    sectionTitle="Offerte"
                    products={products}
                    isHalf={true}
                />
                <ProductsGrid
                    sectionTitle="Simili ai prodotti che hai già acquistato"
                    products={products}
                    isHalf={true}
                />
                <ProductsGrid
                    sectionTitle="I piú venduti"
                    products={products}
                    isHalf={true}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
